function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {
            lat: -28.485500,
            lng: -48.768865
        }
    });
    var atleticas = [
        //NÂO SEI DE ONDE SÃO
        /*["GALOS", "", "", -28.499020, -48.759440],
        ["CAOTICOS", "", "", -28.440523, -48.822045],
        ["AAA", "", "", -28.479283, -48.771273],*/
        ["ELCARTEL", "Chapeco", "SC", -28.488593, -48.768282],
        /*,
                  ["AAAO", "", "", -28.479170, -48.771095],
                  ["AAAFMP", "Porto Alegre", "RS", -28.492774, -48.769442],
                  ["AAAD", "RioGrande", "RS", -28.479563, -48.768879],
                  ["AAACM", "Criciuma", "SC", -28.485123, -48.768999],
                  ["AAANUD", "Criciuma", "SC", -28.484007, -48.768158],
                  ["AMEN", "Joinvile", "SC", -28.482511, -48.768954],
                  ["AADU", "Florianopolis", "SC", -28.491627, -48.772042],
                  ["AAIFSC", "Florianopolis", "SC", -28.479330, -48.769284],
                  ["AAAUE", "Erechim", "SC", -28.480902, -48.769268],
                  ["AAAEIFC", "Criciuma", "SC", -28.491291, -48.773899],
                  ["AAAEC", "Lajeado", "RS", -28.491348, -48.773857],
                  ["ATECO", "Florianopolis", "SC", -28.485182, -48.768763],
                  ["A5", "Florianopolis", "SC",  -28.490161, -48.771962],
                  ["AAADUPT", "Florianopolis", "SC",  -28.499132, -48.759622],
                  ["AAAC", "Chapeco", "SC", -28.483457, -48.768417],
                  ["ATENUN", "Joinvile", "SC", -28.480905, -48.769055],
                  ["CCTJ", "Joinvile", "SC", -28.479033, -48.768696],
                  ["AAACEM", "Joinvile", "SC", -28.494260, -48.765891],
                  ["AAAEA_UNISOSIESC", "Curitiba", "PR", -28.489165, -48.768100],
                  ["A3RI", "Florianopolis", "SC", -28.497894,-48.758274],
                  ["ATEC", "Florianopolis", "SC", -28.490030, -48.773589],
                  ["ATEP", "Florianopolis", "SC", -28.489486, -48.771194],
                  ["ATEL", "Florianopolis", "SC", -28.493645, -48.769116],
                  ["DIREITO_UFSC", "Florianopolis", "SC", -28.487847, -48.771611],
                  ["AESA", "Florianopolis", "SC", -28.488964, -48.768596],
                  ["ATACA", "Florianopolis", "SC", -28.488803, -48.768497],
                  ["A7", "Florianopolis", "SC", -28.487967, -48.767905],
                  ["ATEQA", "Florianopolis", "SC", -28.486179, -48.771625],
                  ["ATM", "Florianopolis", "SC", -28.486040, -48.768656],
                  ["ATARQ", "Florianopolis", "SC", -28.485596, -48.767667],
                  ["AAAMHS", "Pelotas", "RS", -28.489570, -48.770931],
                  ["AAAMHS", "Pelotas", "RS", -28.483807, -48.768245],
                  ["GENERAL", "Caxias do Sul", "RS", -28.489720, -48.766580],
                  ["ASA", "Curitiba", "PR", -28.489088, -48.765250],
                  ["Engenharias IFSUL", "Pelotas", "RS", -28.481664, -48.768876],
                  ["TENDEL", "Chapeco", "SC", -28.481721, -48.768162],
                  ["ENGENIOS", "Joinvile", "SC", -28.482596, -48.769190],
                  ["PDC", "Criciúma", "SC", -28.494793, -48.767998],
                  ["AAAX", "Xanxere", "SC", -28.490203, -48.768166],
                  ["AAAX", "Xanxere", "SC", -28.487508, -48.767091],
                  ["AAAX", "Xanxere", "SC", -28.486441, -48.771894],
                  ["UNISC", "Santa Cruz do Sul", "RS", -28.480336, -48.773805],
                  ["AARDS", "Blumenau", "SC", -28.482926, -48.770402],
                  ["AAAAF", "Blumenau", "SC", -28.478907, -48.771126],
                  ["AAAOF", "Blumenau", "SC", -28.478918, -48.771319],
                  ["MAMUTES", "Guarapuava", "PR", -28.467057, -48.770600],
                  ["AAAEA", "Blumenau", "SC", -28.486639, -48.766250],
                  ["AAASF", "Blumenau", "SC", -28.487632, -48.771689],
                  ["AAAMV", "Blumenau", "SC", -28.487452, -48.771689],
                  ["AAASC", "Blumenau", "SC", -28.467057, -48.768000],*/
                  ["UNI", "", "", -28.485532, -48.765468],
                  ["UNI", "", "", -28.494719, -48.761675],
    ]
    for (atletica in atleticas) {
        if (((document.getElementById('estado').value == atleticas[atletica][2] || document.getElementById('estado').value == "") &&
                (document.getElementById('cidade').value == atleticas[atletica][1] || document.getElementById('cidade').value == "")) ||
            (atleticas[atletica][0] == "UNI")) {
            var image = 'logos_atleticas/icon_' + atleticas[atletica][0] + '.png';
            var Marker = new google.maps.Marker({
                position: {
                    lat: atleticas[atletica][3],
                    lng: atleticas[atletica][4]
                },
                map: map,
                icon: image
            });
        }
    }
}