import { createTest, destroyVM } from '../util';
import TextLayer from 'packages/text-layer';

describe('TextLayer', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TextLayer, true);
    expect(vm.$el).to.exist;
  });
});

