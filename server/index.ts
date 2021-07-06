const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

const PORT = 5000;

(async function start() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.o4j5p.mongodb.net/supplatter?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        });
        app.listen(PORT, () => console.log(`Server has been started on http://localhost:${PORT}`));
    } catch (error) {
        console.log('Server Error', error.message);
        process.exit(1);
    }
})();
