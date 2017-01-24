import {injectable} from "inversify";
import FieldStoreInterface from "../../interfaces/field-store";
import FieldDescriptorInterface from "../../interfaces/field-descriptor";

@injectable()
class FieldStore implements FieldStoreInterface {
    fieldDescriptors: Object;

    constructor() {
        console.log('Field store is created');

        this.fieldDescriptors = {};
    }

    registerField(fieldDescriptor: FieldDescriptorInterface) {
        this.fieldDescriptors[fieldDescriptor.name] = fieldDescriptor;
    }

    getField(fieldName: string) {
        return this.fieldDescriptors[fieldName];
    }
}

export default FieldStore;