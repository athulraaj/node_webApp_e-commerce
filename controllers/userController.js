

exports.loadHome = async (req, res) => {
    try {
        res.render('user/home')
    } catch (err) {
        console.error('Error loading home page: ', err);
        res.status(500).render('error', {
            message: 'An error occurred while loading the homepage. Please try again.'
        });
    }
};