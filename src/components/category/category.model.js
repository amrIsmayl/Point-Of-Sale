
const { Schema, model, Types } = require('mongoose')

const schema = Schema({
    // admin: { type: Types.ObjectId, ref: "Admin" },
    name: {
        ar: { type: String, },
        en: { type: String, },
    },
    slug: String,
    cover: String,
    banner: {
        ar: String,
        en: String,
    },
    icon: String,
    stringQuery: String,
    // sort: { type: Number, default: 0 },
    is_active: { type: Boolean, default: true },
    is_parent: { type: Boolean, default: false },
    // parent: { type: Types.ObjectId, ref: "Category" },
    // sub_categories: [{ type: Types.ObjectId, ref: "Category" }],
    // filters: [{ type: Types.ObjectId, ref: "Filter" }],
    // brands: [{ type: Types.ObjectId, ref: "Brand" }],
}, { timestamps: true, })

schema.post('init', (doc) => {
    // the "pre" is : edit data before save data in database // 3aks el post
    doc.image = "http://localhost:3000/categories/" + doc.image
})

module.exports = model('category', schema)