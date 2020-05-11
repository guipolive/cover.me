const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate'); // vai nos auxiliar na paginação

const CoverSchema = new mongoose.Schema({
    
    musicId: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: false
    },

    coverArtist: {
        type: String,
        required: false
    },

    url: {
        type: Array,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

    /* 

    ifValidated: {
        type: Boolean,
        default: false
    },

     */
});

CoverSchema.plugin(mongoosePaginate); // aqui estamos colocando em uso o módulo que instalamos (mongoose-paginate), que está sendo utilizado no método find() no nosso arquivo controller

mongoose.model('Cover', CoverSchema);  // faz com que toda a plicação reconheça esse model pronto