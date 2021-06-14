import { createTest, destroyVM } from '../util';
import PhotoLayer from 'packages/photo-layer';

describe('PhotoLayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PhotoLayer, true);
    expect(vm.$el).to.exist;
  });
});

