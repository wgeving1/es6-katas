// 61: modules - import 
// To do: make all tests pass, leave the assert lines unchanged!

import assert from 'assert'; // is only here for completeness, `assert` is always imported by default


describe('use `import` to import functions that have been exported (somewhere else)', function() {
  describe('the import statement', function() {
    it('is only allowed on the root level', function() {
      // Try to comment this out, it will yell at you!
      // import assert from 'assert';
    });
    it('import an entire module using `import <name> from "<moduleName>"`', function() {
      const expectedType = 'function';
      assert.equal(typeof assert, expectedType);
    });
  });
  describe('import members', function() {
    it('import a single member, using `import {<memberName>} from "module"`', function() {
      const equal = assert.equal;
      assert.strictEqual(equal, assert.equal);
    });
    describe('separate multiple members with a comma', function() {
      it('`deepEqual` from the assert module', () => {
        const deepEqual = assert.deepEqual;
        assert.strictEqual(deepEqual, assert.deepEqual);
      });
      it('`notEqual` from the assert module', () => {
        const notEqual = assert.notEqual;
        assert.strictEqual(notEqual, assert.notEqual);
      });
    });
  });
  describe('alias imports', function() {
    it('using `member as alias` as memberName', function() {
      const myEqual = assert.equal;
      assert.strictEqual(myEqual, assert.equal);
    });
    it('rename the default export of a module, using `default as alias` as memberName', function() {
      const myAssert = assert;
      assert.strictEqual(myAssert, assert);
    });
  });
});
