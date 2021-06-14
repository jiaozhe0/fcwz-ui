import { createTest, destroyVM } from '../util';
import Photolayer from 'packages/PhotoLayer';

describe('Photolayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Photolayer, true);
    expect(vm.$el).to.exist;
  });
});

