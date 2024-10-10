Controllers.get = async function (req, res) {
    try {
        res.render('additionalInfo', {
            title: 'Additional Information',
            user: req.user, 
        });
    } catch (err) {
        console.error('Error rendering Additional Info page:', err);
        res.status(500).send('An error occurred');
    }
};
module.exports = Controllers;

