# from urllib.parse import urlparse, parse_qs
from iapws import IAPWS97
# from pyXSteam.XSteam import XSteam
import json


def app(environ, start_response):
    # parsed_url = urlparse(environ['RAW_URI'])
    # query = parse_qs(parsed_url.query)
    # func = list(query)[0]
    # args = list(query[func])
    sat_steam = IAPWS97(P=1, x=1)
    sat_liquid = IAPWS97(T=370, x=0)
    steam = IAPWS97(P=2.5, T=500)
    print(sat_steam.h, sat_liquid.h, steam.h)
    # steamTable = XSteam(XSteam.UNIT_SYSTEM_MKS)
    # getResult = getattr(steamTable, func)

    # if len(args) == 1:
    #     result = getResult(int(args[0]))
    # elif len(args) == 2:
    #     result = getResult(int(args[0]), int(args[1]))

    result = 124
    status = '200 OK'
    response_headers = [
        ('Content-type', 'application/json;charset=utf-8'),
        ('Access-Control-Allow-Origin', '*'),
        ('Content-Length', str(len(str(result))))
    ]
    response_body = json.dumps(result).encode()
    start_response(status, response_headers)
    return iter([response_body])
