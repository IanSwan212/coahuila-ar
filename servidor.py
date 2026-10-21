# Servidor local para compilar y probar la RA: sirve esta carpeta y acepta POST /guardar/<archivo>
import http.server, os, sys

DIR = os.path.dirname(os.path.abspath(__file__))


class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=DIR, **k)

    def do_POST(self):
        if not self.path.startswith("/guardar/"):
            self.send_error(404)
            return
        name = os.path.basename(self.path)
        data = self.rfile.read(int(self.headers["Content-Length"]))
        open(os.path.join(DIR, name), "wb").write(data)
        self.send_response(200)
        self.end_headers()


port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
http.server.ThreadingHTTPServer(("127.0.0.1", port), H).serve_forever()
