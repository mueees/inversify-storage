import "reflect-metadata";
import {Container} from "inversify";
import FieldStoreInterface from "../interfaces/field-store";
import FieldStore from "../entities/field-store/field-store";
import CoreField from "../entities/core-field/index";
import IDENTIFIER from "../identifier/index";

let container = new Container();

container.bind<any>(IDENTIFIER.core).to(CoreField);
container.bind<FieldStoreInterface>(IDENTIFIER.store).to(FieldStore).inSingletonScope();

export default container;