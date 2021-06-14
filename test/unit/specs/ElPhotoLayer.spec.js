import { createTest, destroyVM } from '../util';
import Elphotolayer from 'packages/ElPhotoLayer';

describe('Elphotolayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Elphotolayer, true);
    expect(vm.$el).to.exist;
  });
});

