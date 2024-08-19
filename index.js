import express from 'express';
import path from 'path';
import fs from 'fs';
import util from 'util';

const port = 3000;
const app = express();
const readFile = util.promisify(fs.readFile);

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

// Set the static files directory
app.use(express.static(path.join(path.resolve(), 'public')));

const getFilesFromDirectory = async (directory) => {
    const files = await fs.promises.readdir(directory);
    return files.map(file => ({
        name: file,
        path: path.join(directory, file),
        extension: path.extname(file).substring(1)
    }));
};

const extensionToLanguageClass = {
    'js': 'javascript',
    'html': 'html',
    'css': 'css',
    'txt': 'plaintext',
    'php':'php',
    'java': 'java',
    // Add more mappings as needed
};

app.get('/warning', (req,res) => {
    res.render('warning');
});

app.get('/', async (req, res) => {
    const displayDir1 = path.join(path.resolve(), 'public', 'display1');
    const displayDir2 = path.join(path.resolve(), 'public', 'display2');
    const files1 = await getFilesFromDirectory(displayDir1);
    const files2 = await getFilesFromDirectory(displayDir2);
    res.render('index', { files1, files2 });
});

app.get('/file/:folder/:filename', async (req, res) => {
    const { folder, filename } = req.params;
    const filePath = path.join(path.resolve(), 'public', folder, filename);
    const extension = path.extname(filename).substring(1);
    const languageClass = extensionToLanguageClass[extension] || 'plaintext';

    try {
        const content = await readFile(filePath, 'utf-8');
        res.render('file', { filename, content, extension: languageClass });
    } catch (error) {
        res.status(404).send('File not found');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
