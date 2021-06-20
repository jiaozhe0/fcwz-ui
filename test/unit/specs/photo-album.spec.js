import { createTest, destroyVM } from '../util';
import PhotoAlbum from 'packages/photo-album';

describe('PhotoAlbum', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PhotoAlbum, true);
    expect(vm.$el).to.exist;
  });
});

