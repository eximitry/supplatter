const { Router } = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const router = Router();
const Identicon = require('identicon.js');

router.post(
    '/register',
    [
        check('email', 'некоректный email').isEmail(),
        check('password', 'минимальная длина 6 символов').isLength({ min: 6 }),
    ],
    async (req: any, res: any) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные при регестрации.'
                });
            }

            const { email, password } = req.body;
            const isUsed = await User.findOne({ email })

            if (isUsed) {
                return res.status(400).json({ message: 'Email занят' });
            }

            const hashPassword = await bcrypt.hash(password, 12);
            const generatedAvatar = await new Identicon(new Date().toISOString() + email).toString();
            const user = new User({ email, password: hashPassword, avatar: generatedAvatar });
            await user.save();

            await res.status(201).json({ message: 'Пользователь создан' });
        } catch (error) {
            console.log(error);
        }
    });

router.post(
    '/login',
    [
        check('email', 'некоректный корректный email').normalizeEmail().isEmail(),
        check('password', 'введите пароль').exists(),
    ],
    async (req: any, res: any) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные при входе в систему.'
                });
            }

            const { email, password } = req.body;
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(400).json({ message: 'Пользователь не найден' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный пароль, попробуй стнова' });
            }

            const jwtSecret = 'Supplatter is the best project!';
            const token = jwt.sign(
                { userId: user.id },
                jwtSecret,
                { expiresIn: '1h' }
            );

            await res.json({ token, userId: user.id });


        } catch (error) {
            console.log(error);
        }
    });

module.exports = router;
