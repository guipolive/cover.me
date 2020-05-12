const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate'); // vai nos auxiliar na paginação

const CoverSchema = new mongoose.Schema({
    
    music: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'Music', required: true},
        name: {type: String, required: true},
        url: {type: Array, required: true},
        videoId: {type: Array, required: true},
        autor: {
            id: {type: mongoose.Schema.Types.ObjectId, ref: 'Artist', required: false},
            name: {type: String, required: true}
        }
    },

    description: {
        type: String,
        required: false
    },

    coverArtist: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'CoverArtist', required: false},
        name: {type: String, required: false}
    },

    url: {
        type: Array,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

CoverSchema.plugin(mongoosePaginate); // aqui estamos colocando em uso o módulo que instalamos (mongoose-paginate), que está sendo utilizado no método find() no nosso arquivo controller

mongoose.model('Cover', CoverSchema);  // faz com que toda a plicação reconheça esse model pronto