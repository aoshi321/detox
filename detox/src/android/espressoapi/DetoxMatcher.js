/**

	This code is generated.
	For more information see generation/README.md.
*/



class DetoxMatcher {
<<<<<<< HEAD
  static matcherForText(text) {
    if (typeof text !== "string") throw new Error("text should be a string, but got " + (text + (" (" + (typeof text + ")"))));
=======
  static matcherForAnd(m1, m2) {
    if (typeof m1 !== 'object' || typeof m1.constructor !== 'object' || m1.constructor.name !== Matcher) {
      throw new Error('m1 should be an instance of Matcher, got ' + m1);
    }

    if (typeof m2 !== 'object' || typeof m2.constructor !== 'object' || m2.constructor.name !== Matcher) {
      throw new Error('m2 should be an instance of Matcher, got ' + m2);
    }

>>>>>>> add Matcher<View> type to generated code
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
<<<<<<< HEAD
      method: "matcherForText",
      args: [{
        type: "String",
        value: text
=======
      method: "matcherForAnd",
      args: [{
        type: "Matcher<View>",
        value: m1
      }, {
        type: "Matcher<View>",
        value: m2
>>>>>>> add Matcher<View> type to generated code
      }]
    };
  }

<<<<<<< HEAD
  static matcherForContentDescription(contentDescription) {
    if (typeof contentDescription !== "string") throw new Error("contentDescription should be a string, but got " + (contentDescription + (" (" + (typeof contentDescription + ")"))));
=======
  static matcherForOr(m1, m2) {
    if (typeof m1 !== 'object' || typeof m1.constructor !== 'object' || m1.constructor.name !== Matcher) {
      throw new Error('m1 should be an instance of Matcher, got ' + m1);
    }

    if (typeof m2 !== 'object' || typeof m2.constructor !== 'object' || m2.constructor.name !== Matcher) {
      throw new Error('m2 should be an instance of Matcher, got ' + m2);
    }

>>>>>>> add Matcher<View> type to generated code
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
<<<<<<< HEAD
      method: "matcherForContentDescription",
      args: [{
        type: "String",
        value: contentDescription
=======
      method: "matcherForOr",
      args: [{
        type: "Matcher<View>",
        value: m1
      }, {
        type: "Matcher<View>",
        value: m2
>>>>>>> add Matcher<View> type to generated code
      }]
    };
  }

<<<<<<< HEAD
  static matcherForTestId(testId) {
    if (typeof testId !== "string") throw new Error("testId should be a string, but got " + (testId + (" (" + (typeof testId + ")"))));
=======
  static matcherForNot(m) {
    if (typeof m !== 'object' || typeof m.constructor !== 'object' || m.constructor.name !== Matcher) {
      throw new Error('m should be an instance of Matcher, got ' + m);
    }

>>>>>>> add Matcher<View> type to generated code
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
<<<<<<< HEAD
      method: "matcherForTestId",
      args: [{
        type: "String",
        value: testId
=======
      method: "matcherForNot",
      args: [{
        type: "Matcher<View>",
        value: m
>>>>>>> add Matcher<View> type to generated code
      }]
    };
  }

<<<<<<< HEAD
  static matcherForClass(className) {
    if (typeof className !== "string") throw new Error("className should be a string, but got " + (className + (" (" + (typeof className + ")"))));
=======
  static matcherWithAncestor(m, ancestorMatcher) {
    if (typeof m !== 'object' || typeof m.constructor !== 'object' || m.constructor.name !== Matcher) {
      throw new Error('m should be an instance of Matcher, got ' + m);
    }

    if (typeof ancestorMatcher !== 'object' || typeof ancestorMatcher.constructor !== 'object' || ancestorMatcher.constructor.name !== Matcher) {
      throw new Error('ancestorMatcher should be an instance of Matcher, got ' + ancestorMatcher);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherWithAncestor",
      args: [{
        type: "Matcher<View>",
        value: m
      }, {
        type: "Matcher<View>",
        value: ancestorMatcher
      }]
    };
  }

  static matcherWithDescendant(m, descendantMatcher) {
    if (typeof m !== 'object' || typeof m.constructor !== 'object' || m.constructor.name !== Matcher) {
      throw new Error('m should be an instance of Matcher, got ' + m);
    }

    if (typeof descendantMatcher !== 'object' || typeof descendantMatcher.constructor !== 'object' || descendantMatcher.constructor.name !== Matcher) {
      throw new Error('descendantMatcher should be an instance of Matcher, got ' + descendantMatcher);
    }

>>>>>>> add Matcher<View> type to generated code
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
<<<<<<< HEAD
      method: "matcherForClass",
      args: [{
        type: "String",
        value: className
=======
      method: "matcherWithDescendant",
      args: [{
        type: "Matcher<View>",
        value: m
      }, {
        type: "Matcher<View>",
        value: descendantMatcher
>>>>>>> add Matcher<View> type to generated code
      }]
    };
  }

  static matcherForSufficientlyVisible() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForSufficientlyVisible",
      args: []
    };
  }

  static matcherForNotVisible() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNotVisible",
      args: []
    };
  }

  static matcherForNotNull() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNotNull",
      args: []
    };
  }

  static matcherForNull() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForNull",
      args: []
    };
  }

  static matcherForAtIndex(index, innerMatcher) {
    if (typeof index !== "number") throw new Error("index should be a number, but got " + (index + (" (" + (typeof index + ")"))));

    if (typeof innerMatcher !== 'object' || typeof innerMatcher.constructor !== 'object' || innerMatcher.constructor.name !== Matcher) {
      throw new Error('innerMatcher should be an instance of Matcher, got ' + innerMatcher);
    }

    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForAtIndex",
      args: [{
        type: "Integer",
        value: index
      }, {
        type: "Matcher<View>",
        value: innerMatcher
      }]
    };
  }

  static matcherForAnything() {
    return {
      target: {
        type: "Class",
        value: "com.wix.detox.espresso.DetoxMatcher"
      },
      method: "matcherForAnything",
      args: []
    };
  }

}

module.exports = DetoxMatcher;