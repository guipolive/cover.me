const mongoose = require('mongoose');

const Artist = mongoose.model('Artist'); // pegando o modelo 

module.exports = {
    

    // busca todas
    async index(req, res){
        
        const {page = 1} = req.query; // pegando a página enviada por parâmetro na url. Por default usa 1 ( se não encontrar nenhuma página )

        const artists = await Artist.paginate({ /* aqui iriam as condições */}, {page, limit: 10}); // select *

        return res.json(artists);
    },

    async store(req, res){
        console.log('teste');
        const artist = await Artist.create(req.body); // aqui estamos criando uma nova entidade, que será igual à da requisição

        return res.json(artist);
    },

    /* async show(req, res){
        const entity = await Entity.findById(req.params.id); // buscando uma entidade pelo ID passado por parâmetro

        return res.json(entity);
    },

    

    async destroy(req, res){
        await Entity.findByIdAndDelete(req.params.id); // deleta uma entidade de acordo com o ID enviado por parâmetro

        return res.send(`Entidade ${req.params.id} deletada com sucesso`);
    },

    async update(req, res){
        // parâmetro new é necessário para retornar o valor da NOVA entidade à variável. sem esse parâmetro, o valor da variável seria o antigo mesmo que o update tenha acontecido
        entity = await Entity.findByIdAndUpdate(req.params.id, req.body, {new: true}); // procurando uma entidade pelo id e fazendo update

        return res.json(entity);
    }, */
}