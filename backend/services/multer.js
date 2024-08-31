const multer = require('multer');
const path = require('path');
const fs = require('fs'); 

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const relativePath = path.join(__dirname, '../uploads');

        if (!fs.existsSync(relativePath)) {
            fs.mkdirSync(relativePath, { recursive: true });
        }

        cb(null, relativePath);
    },
    filename: (req, file, cb) => {
        const fileName = `resume_${Date.now()}${path.extname(file.originalname)}`;
        cb(null, fileName);
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileTypes = /pdf|doc|docx/;
        const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = fileTypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only PDF, DOC, and DOCX files are allowed'));
        }
    },
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
}).single('resume');

module.exports = upload;
