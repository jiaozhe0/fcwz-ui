import { createTest, destroyVM } from '../util';
import Fcphotolayer from 'packages/FcPhotoLayer';

describe('Fcphotolayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Fcphotolayer, true);
    expect(vm.$el).to.exist;
  });
});

