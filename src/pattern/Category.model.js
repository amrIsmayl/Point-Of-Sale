// import db from "../../database/mongo";
// // import { ObjectId } from "mongoose";
// import { ICategory } from './Category.model';
// const { Schema, model, Types } = require('mongoose');

// export interface ICategory extends db.Document {
//     name: string;
//     cover?: string;
//     sub_categories?: [ObjectId] | Array<any>;
// }
// const Category: db.Schema<ICategory> = new db.Schema(
//     {
//         admin: { type: db.SchemaTypes.ObjectId, ref: "Admin" },
//         name: {
//             ar: {
//                 type: String,
//             },
//             en: {
//                 type: String,
//             },
//         },
//         slug: String,
//         cover: String,
//         banner: {
//             ar: String,
//             en: String,
//         },
//         icon: String,
//         stringQuery: String,
//         sort: { type: Number, default: 0 },
//         is_active: { type: Boolean, default: true },
//         is_parent: { type: Boolean, default: false },
//         parent: { type: db.SchemaTypes.ObjectId, ref: "Category" },
//         sub_categories: [{ type: db.SchemaTypes.ObjectId, ref: "Category" }],
//         filters: [{ type: db.SchemaTypes.ObjectId, ref: "Filter" }],
//         brands: [{ type: db.SchemaTypes.ObjectId, ref: "Brand" }],
//     },
//     {
//         timestamps: true,
//     }
// );
// export default db.model < ICategory > ("Category", Category);