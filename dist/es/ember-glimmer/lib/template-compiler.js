import RuntimeResolver from './resolver';
// factory for DI
export default {
    create() {
        return new RuntimeResolver().compiler;
    },
};
//# sourceMappingURL=template-compiler.js.map