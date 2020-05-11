const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate'); // vai nos auxiliar na paginação

const MusicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    artistId: {
        type: String,
        required: true
    },

    

    albums: {
        type: Array,
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

MusicSchema.plugin(mongoosePaginate); // aqui estamos colocando em uso o módulo que instalamos (mongoose-paginate), que está sendo utilizado no método find() no nosso arquivo controller

mongoose.model('Music', MusicSchema);  // faz com que toda a plicação reconheça esse model pronto