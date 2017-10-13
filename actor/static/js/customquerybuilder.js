var rules_eg0 = {
    condition: 'AND',
    rules: [{
        id: 'effect',
        operator: 'in',
        value: [1]
    }, {
        id: 'segregation',
        operator: 'between',
        value: ['flute', 'horn']
    }]
};
var rules_eg1 = {
    condition: 'AND',
    rules: [{
        id: 'effect',
        operator: 'in',
        value: [0,1,2,4]
    }, {
        condition: 'OR',
        rules: [{
            id: 'strength',
            operator: 'equal',
            value: '1',
        }, {
            id: 'strength',
            operator: 'equal',
            value: "5",
        }]
    },{
        id: 'composer',
        operator: 'contains',
        value: 'Mussorgsky'
    }]
};
var rules_eg2 = {
    condition: 'AND',
    rules: [{
        id: 'effect',
        operator: 'in',
        value: [0],
    }, {
        id: 'blend_type',
        operator: 'equal',
        value: [0],
    }, {
        id: 'subtype_blend',
        operator: 'equal',
        value: [0],
    }, {
        condition: 'OR',
        rules: [{
            id: 'dom_instrument',
            operator: 'equal',
            value: 'oboe',
        }, {
            id: 'dom_instrument',
            operator: 'contains',
            value: "horn",
        }]
    }, {
      id: 'em_instrument',
      operator: 'contains',
      value: 'flute bassoon',
    }]
};
var rules_eg3 = {
    condition: 'AND',
    rules: [{
        id: 'effect',
        operator: 'in',
        value: [0]
    }, {
        id: 'subtype_blend',
        operator: 'equal',
        value: [1]
    }, {
        id: 'strength',
        operator: 'equal',
        value: '3',
    }, {
        id: 'composer',
        operator: 'equal',
        value: 'Brahms',
    }, {
        id: 'instrumentation',
        operator: 'contains',
        value: 'flute oboe, violin viola'
    }]
};


// GENERAL FILTERS
effect_filter = {
  id: 'effect',
  field: 'effect',
  label: 'Effect',
  optgroup: 'All Effects',
  type: 'integer',
  input: 'checkbox',
  unique: true,
  values: {
      0: 'Blends',
      1: 'Segregations',
      2: 'Stratifications',
      3: 'Progressives',
      4: 'Contrasts',
      5: 'Gestures'
  },
  color: 'primary',
  operators: ['in']
};
composer_filter = {
  id: 'composer',
  field: 'text',
  label: 'Composer',
  optgroup: 'All Effects',
  type: 'string'
};
piece_filter = {
  id: 'piece',
  field: 'text',
  label: 'Piece',
  optgroup: 'All Effects',
  type: 'string'
  //unique: true
  //description: 'This filter is "unique", it can be used only once'
};
movement_filter = {
  id: 'movement',
  field: 'text',
  label: 'Movement',
  optgroup: 'All Effects',
  type: 'string'
};
strength_filter = {
   id: 'strength',
   field: 'strength',
   label: 'Strength',
   optgroup: 'All Effects',
   type: 'integer',
   validation: {
       min: 1,
       max: 5,
       step: 1
   }
};
instrumentation_filter = {
   id: 'instrumentation',
   field: 'instrumentation',
   label: 'Instrumentation',
   optgroup: 'All Effects',
   type: 'string',
   input: 'text',
   size: 30,
   description: 'Instrument names separated by spaces. Separate groups of instruments by commas to get OR statements',
   operators: ['contains', 'equal']
};
date_filter = {
  id: 'composition_range',
  field: 'composition_range',
  label: 'Date',
  optgroup: 'All Effects',
  type: 'double',
  operators: ['between']
  /*
  validation: {
      min: 1300,
      max: 2016
  },
  plugin: 'slider',
  plugin_config: {
      min: 1000,
      max: 2016,
      range: true,
      value: [1600, 1900]
  },
  valueSetter: function(rule, value) {
      if (rule.operator.nb_inputs == 1) value = [value];
      rule.$el.find('.rule-value-container input').each(function(i) {
          $(this).slider('setValue', value[i] || 0);
      });
  },
  valueGetter: function(rule) {
      var value = [];
      rule.$el.find('.rule-value-container input').each(function() {
          value.push($(this).slider('getValue'));
      });
      return rule.operator.nb_inputs == 1 ? value[0] : value;
  }
  */
};

// BLEND FILTERS
blend_type_filter = {
  id: 'blend_type',
  field: 'blend_type',
  label: 'Blend type',
  optgroup: 'Blend',
  type: 'integer',
  input: 'select',
  values: {
      0: 'Augmentation',
      1: 'Emergence',
      2: 'Punctuation Blend',
      3: 'Textural Integration',
      4: 'Timbral Heterogeneity',
  },
};
subtype_blend_filter = {
  id: 'subtype_blend',
  field: 'subtype',
  label: 'Subtype',
  optgroup: 'Blend',
  type: 'integer',
  input: 'radio',
  values: {
      1: 'Progressive',
      0: 'Static'
  },
  colors: {
      1: 'success',
      0: 'success'
  },
  operators: ['equal']
};
dominating_instruments_filter = {
        id: 'dom_instrument',
        field: 'dominating_instruments_engram',
        label: 'Dominating Instruments',
        optgroup: 'Blend',
        type: 'string',
        input: 'text',
        size: 40,
        description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
        operators: ['contains', 'equal']
};
embellishing_instruments_filter = {
        id: 'em_instrument',
        field: 'embellishing_instruments_engram',
        label: 'Embellishing Instruments',
        optgroup: 'Blend',
        type: 'string',
        input: 'text',
        size: 40,
        description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
        operators: ['contains', 'equal']
};
timbral_group1_filter = {
        id: 'timbral_group1',
        field: 'timbral_group1_engram',
        label: 'Timbral Group 1',
        optgroup: 'Blend',
        type: 'string',
        input: 'text',
        size: 40,
        description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
        operators: ['contains', 'equal']
};
timbral_group2_filter = {
        id: 'timbral_group2',
        field: 'timbral_group2_engram',
        label: 'Timbral Group 2',
        optgroup: 'Blend',
        type: 'string',
        input: 'text',
        size: 40,
        description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
        operators: ['contains', 'equal']
};
blend_filters = [
  blend_type_filter,
  subtype_blend_filter,
  dominating_instruments_filter,
  embellishing_instruments_filter,
  timbral_group1_filter,
  timbral_group2_filter
];

// SEGREGATION FILTERS
segregation_filter = {
   id: 'segregation',
   field: 'segregation',
   label: 'Segregation',
   optgroup: 'Segregation',
   type: 'string',
   input: 'text',
   size: 25,
   description: "Use 'contains' to search over more than two groups and separate those groups by commas.",
   operators: ['between', 'contains']
};
segregation_filters = [
  segregation_filter
];

// STRATIFICATION FILTERS

subtype_stratification_filter = {
  id: 'subtype_stratification',
  field: 'subtype',
  label: 'Subtype',
  optgroup: 'Stratification',
  type: 'integer',
  input: 'radio',
  values: {
      1: 'Progressive',
      0: 'Static'
  },
  colors: {
      1: 'success',
      0: 'success'
  },
  operators: ['equal']
};
foreground_filter = {
  id: 'foreground',
  field: 'foreground_engram',
  label: 'Foreground',
  optgroup: 'Stratification',
  type: 'string',
  input: 'text',
  size: 40,
  description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
  operators: ['contains', 'equal']
};
middleground_filter = {
  id: 'middleground',
  field: 'middleground',
  label: 'Middleground',
  optgroup: 'Stratification',
  type: 'string',
  input: 'text',
  size: 40,
  description: "Instrument names separated by spaces, groups separated by commas. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
  operators: ['between', 'contains']
};
background_filter = {
  id: 'background',
  field: 'background_engram',
  label: 'Background',
  optgroup: 'Stratification',
  type: 'string',
  input: 'text',
  size: 40,
  description: "Instrument names separated by spaces. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
  operators: ['contains', 'equal']
};
stratification_filters = [
  subtype_stratification_filter,
  foreground_filter,
  middleground_filter,
  background_filter
];

// PROGRESSIVE FILTERS
progressive_type_filter = {
   id: 'progressive_type',
   field: 'progressive_type',
   label: 'Progressive type',
   optgroup: 'Progressive',
   type: 'integer',
   input: 'radio',
   values: {
       2: 'Timbral Modulation',
       3: 'Klangfarbenmelodie',
       13: 'General'
   },
   colors: {
       2: 'success',
       3: 'success',
       4: 'success',
   },
   operators: ['equal']
};
progressive_filters = [
  progressive_type_filter
];

// CONTRAST FILTERS
contrast_type_filter = {
   id: 'contrast_type',
   field: 'contrast_type',
   label: 'Contrast type',
   optgroup: 'Contrast',
   type: 'integer',
   input: 'radio',
   values: {
       5: 'Antiphonal Contrasts',
       6: 'Timbral Echo',
       7: 'Timbral Shifts',
       8: 'Sectional Division',
       4: 'General'
   },
   colors: {
       5: 'success',
       6: 'success',
       7: 'success',
       8: 'success',
       4: 'success'
   },
   operators: ['equal']
};
contrast_filter = {
        id: 'contrast',
        field: 'contrast',
        label: 'Contrast',
        optgroup: 'Contrast',
        type: 'string',
        input: 'text',
        size: 25,
        description: "Instrument names separated by spaces, groups separated by commas. Use 'contains' for an inclusive search, 'equal' for an exclusive search.",
        operators: ['between', 'contains']
};
contrast_filters = [
  contrast_type_filter,
  contrast_filter
];

// GESTURE FILTERS
gesture_type_filter = {
   id: 'gesture_type',
   field: 'gesture_type',
   label: 'Gesture type',
   optgroup: 'Gesture',
   type: 'integer',
   input: 'radio',
   values: {
       9: 'Sudden Addition',
       10: 'Sudden Reduction',
       11: 'Gradual Addition',
       12: 'Gradual Reduction'
   },
   colors: {
       9: 'success',
       10: 'success',
       11: 'success',
       12: 'success'
   },
   operators: ['equal']
};
gesture_filters = [
  gesture_type_filter
];

// JQUERY QUERYBUILDER
$('#builder-plugins').queryBuilder({
    allow_empty: true,
    inputs_separator: ' and ',

    plugins: [
        'sortable',
        'filter-description',
        'unique-filter',
        'bt-tooltip-errors',
        'bt-selectpicker',
        'bt-checkbox',
        'invert'
    ],

    filters: [
      effect_filter,
      composer_filter,
      piece_filter,
      movement_filter,
      strength_filter,
      instrumentation_filter,
      //date_filter,
      blend_type_filter,
      subtype_blend_filter,
      subtype_stratification_filter,
      dominating_instruments_filter,
      embellishing_instruments_filter,
      timbral_group1_filter,
      timbral_group2_filter,
      segregation_filter,
      foreground_filter,
      middleground_filter,
      background_filter,
      progressive_type_filter,
      contrast_type_filter,
      contrast_filter,
      gesture_type_filter,
      //sort_filter,
    ]
    //rules: rules_plugins
    // FIXME: implement starting rules that won't reload save for the first time (with no cookies)
});

$('#btn-reset').on('click', function() {
    $('#builder-plugins').queryBuilder('reset');
});

$('#btn-set0').on('click', function() {
    $('#builder-plugins').queryBuilder('setRules', rules_eg0);
});

$('#btn-set1').on('click', function() {
    $('#builder-plugins').queryBuilder('setRules', rules_eg1);
});

$('#btn-set2').on('click', function() {
    $('#builder-plugins').queryBuilder('setRules', rules_eg2);
});

$('#btn-set3').on('click', function() {
    $('#builder-plugins').queryBuilder('setRules', rules_eg3);
});

$('#btn-set4').on('click', function() {
    $('#builder-plugins').queryBuilder('setRules', rules_eg4);
});

$('#btn-get').on('click', function() {
    var result = $('#builder-plugins').queryBuilder('getRules');

    if (!$.isEmptyObject(result)) {
        alert(JSON.stringify(result, null, 2));
    }
});
