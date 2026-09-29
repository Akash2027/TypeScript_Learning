import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

export default tseslint.config({
    files: ["**/*.ts"],
    // Register the stylistic plugin
    plugins: {
        "@stylistic": stylistic
    },
    extends: [tseslint.configs.recommended],
    rules: {
        "prefer-const": "error",
        eqeqeq: "error",
        // This rule forces you to add a semicolon at the end of statements
        "@stylistic/semi": ["error", "always"] 
    }
});
