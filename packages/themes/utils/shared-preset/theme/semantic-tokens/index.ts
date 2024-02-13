import { defineSemanticTokens } from "@pandacss/dev";
import shadows from "./shadows";


const createSharedSemanticTokens = () => {
    return defineSemanticTokens({
        shadows
    })
}

export default createSharedSemanticTokens;