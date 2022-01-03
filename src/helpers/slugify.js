import slugify from 'slugify';

const createSlug = str =>
  slugify(str, { lower: true, remove: /[*+~.()'"!:@]/g });

export default createSlug;
