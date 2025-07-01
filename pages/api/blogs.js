import * as fs from 'fs';

export default function handler(req, res) {
    fs.readdir('blogdata', (err, files) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Failed to read blog data' });
            return;
        }

        res.status(200).json(files);
    });

}