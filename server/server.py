from urllib.parse import urlparse, parse_qs


def app(environ, start_response):
    """Simplest possible application object"""
    parsed_url = urlparse(environ['RAW_URI'])
    query = parse_qs(parsed_url.query)
    print(query)
    data = b'Hello, World!\n'
    status = '200 OK'
    response_headers = [
        ('Content-type', 'text/plain'),
        ('Content-Length', str(len(data)))
    ]
    start_response(status, response_headers)
    return iter([data])
