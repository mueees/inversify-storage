import FieldDescriptorInterface from "./field-descriptor";

interface FieldStoreInterface {
    registerField(fieldDescriptor: FieldDescriptorInterface): void;
    getField(fieldName: string): void;
}

export default FieldStoreInterface;