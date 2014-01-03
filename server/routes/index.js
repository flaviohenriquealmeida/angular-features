exports.index = function(req, res) {
	console.log('index.html solicitado');
	res.render('index.html');
};

exports.listaFuncionariosDestaques = function(req, res) {
	setTimeout(function() {

		res.json([
			{
				nome: 'Func Dest 1'
			},

			{
				nome: 'Func Dest 2'
			},

			{
				nome: 'Func Dest 3'
			}
		]);
	},1000);
};

exports.listaGerentesDestaques = function(req, res) {
	setTimeout(function() {

		res.json([
			{
				nome: 'Geren Dest 1'
			},

			{
				nome: 'Geren Dest 2'
			},

			{
				nome: 'Geren Dest 3'
			}
		]);
	},1000);
};

exports.listaDiretoresDestaques = function(req, res) {
	setTimeout(function() {

		res.json([
			{
				nome: 'Dir Dest 1'
			},

			{
				nome: 'Dir Dest 2'
			},

			{
				nome: 'Dir Dest 3'
			}
		]);
	},1000);
};