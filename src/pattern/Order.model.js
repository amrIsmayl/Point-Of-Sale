// import db from '../../database/mongo';
// import { ObjectId } from 'mongoose';
// /**
//  * order status
//  * 0 -------> not confirmed
//  * 1 -------> pending
//  * 2 -------> inDeliver
//  * 3 -------> compeleted
//  * 4 -------> canceled
//  * 5 -------> returned
//  */
// /**
//  * order type
//  * 1 -------> cash
//  * 2 -------> installlment
//  */
// interface IOrder extends db.Document {
//     admin: ObjectId;
//     payment: ObjectId;
//     user: ObjectId;
//     anonymousCart: any;
//     anonymousUser?: {
//         name: string;
//         phone: string;
//         address: string;
//     };
//     cart: ObjectId;
//     address: any;
//     jumiaDetails: any;
//     details: any;
//     total: number;
//     status: number;
//     code: string;
//     isOld: boolean;
// }
// const Order: db.Schema<IOrder> = new db.Schema(
//     {
//         admin: { type: db.SchemaTypes.ObjectId, ref: "Admin" },
//         code: String,
//         total: { type: Number, default: 0 },
//         cart: { type: db.SchemaTypes.ObjectId, ref: "Cart" },
//         user: { type: db.SchemaTypes.ObjectId, ref: "User" },
//         anonymousCart: {
//             items: [],
//             financial: {},
//         },
//         anonymousUser: {
//             name: String,
//             address: String,
//             phone: String,
//         },
//         address: {
//             country: { type: db.SchemaTypes.ObjectId, ref: "Country" },
//             city: {},
//             area: String,
//             name: String,
//             phone: String,
//             address: String,
//             type: { type: String, enum: ["office", "home", "work", "other"] },
//             buildingNumber: String,
//             flatNumber: String,
//             floorNumber: String,
//             spacialMark: String,
//             isDefault: { type: Boolean, default: false },
//             isOld: Boolean,
//             specialMark: String,
//             long: String,
//             lat: String,
//         },
//         payment: { type: db.SchemaTypes.ObjectId, ref: "Payment" },
//         status: { type: Number, enum: [0, 1, 2, 3, 4, 5], default: 0 },
//         type: { type: Number, enum: [1, 2], default: 1 },
//         installment: { type: Object },
//         details: {
//             transferImage: String,
//             transferPhone: String,
//             transferDate: String,
//             accountHolderName: String,
//             bankAccountName: String,
//             bankAccountNumber: String,
//             bankTransferFrom: String,
//             notes: String,
//         },
//         jumiaDetails: {},
//     },
//     { timestamps: true }
// );
// export default db.model < IOrder > ("Order", Order); 