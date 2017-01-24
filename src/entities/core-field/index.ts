import {injectable, inject} from "inversify";
import FieldDescriptorInterface from "../../interfaces/field-descriptor";
import FieldStoreInterface from "../../interfaces/field-store";
import IDENTIFIER from "../../identifier/index";

class CharacterFieldDescriptor implements FieldDescriptorInterface {
    name: string = 'vm-character';

    validate() {
        console.log('validate');
    }
}

@injectable()
class CoreField {
    @inject(IDENTIFIER.store) public fieldStore: FieldStoreInterface;

    register() {
        this.fieldStore.registerField(new CharacterFieldDescriptor());
    }
}

export default CoreField;