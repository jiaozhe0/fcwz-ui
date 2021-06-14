import { createTest, destroyVM } from '../util';
import PageSvg from 'packages/page-svg';

describe('PageSvg', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(PageSvg, true);
    expect(vm.$el).to.exist;
  });
});

