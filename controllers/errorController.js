

exports.notFound = async (req, res) => {
    try {
        res.status(404).render('error/404');
    } catch (err) {
        console.error('Error loading 404 page:', err);
        res.status(500).send('Server Error');
    }
};

