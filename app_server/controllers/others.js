/* GET 'about' page */
module.exports.about = function(req, res){
  res.render('generic-text', {
    title: 'About Loc8r',
    content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\n\nLorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium deserunt veniam iusto architecto, fugiat similique, nobis cumque illum enim facere vel laudantium saepe excepturi. Rem, nulla enim ex natus sed beatae. Totam placeat eos nulla quos voluptate et corporis modi similique aliquam eaque accusamus illum fugit voluptatibus consequatur mollitia corrupti explicabo neque, quo quisquam a sequi iure velit? Dolore suscipit natus et unde esse nulla officia distinctio ducimus, officiis obcaecati repellendus doloribus corporis minus nemo illo voluptas nesciunt aspernatur voluptate, dolorem! Saepe soluta consequuntur delectus voluptate quod cum mollitia, inventore repellat commodi, id aspernatur voluptatum molestias autem sit nisi tempora.'
  });
};