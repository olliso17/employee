export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode || 500;
    }
}
//# sourceMappingURL=tratandoErro.js.map