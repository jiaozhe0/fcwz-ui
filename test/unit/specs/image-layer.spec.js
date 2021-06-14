import { createTest, destroyVM } from '../util';
import ImageLayer from 'packages/image-layer';

describe('ImageLayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ImageLayer, true);
    expect(vm.$el).to.exist;
  });
});

