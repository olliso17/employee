import { AppError } from './tratandoErro.js';
export function errorHandler(err, req, res, next) {
    if (err instanceof AppError) {
        res.status(err.statusCode || 500).json({ error: { message: err.message } });
    }
    else {
        console.error(err);
        res.status(500).json({ error: { message: 'Internal Server Error' } });
    }
}
//# sourceMappingURL=errorhandler.js.map