import container from "./config/ioc-config";
import FieldStoreInterface from "./interfaces/field-store";
import IDENTIFIER from "./identifier/index";

let coreField = container.get<any>(IDENTIFIER.core);

// register core fields
coreField.register();

// store is singleton
let storeField = container.get<FieldStoreInterface>(IDENTIFIER.store);

console.log(storeField.getField('vm-character'));