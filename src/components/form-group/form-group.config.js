module.exports = {
  title: 'Form group',
  status: 'wip',
  context: {
    id: 'full-name',
    name: 'full-name',
    label: 'Full name'
  },
  variants: [{
    name: 'has hint',
    context: {
      hint: 'As shown on your birth certificate or passport'
    }
  },
  {
    name: 'has value',
    context: {
      value: 'Example name'
    }
  },
  {
    name: 'has error',
    context: {
      error: 'Error message about full name goes here'
    }
  },
  {
    name: 'has hint and error',
    context: {
      hint: 'As shown on your birth certificate or passport',
      error: 'Error message about full name goes here'
    }
  },
  {
    name: 'textarea',
    context: {
      isTextarea: 'true',
      value: 'Content of text area'
    }
  }],
  arguments: ['id', 'name', 'label', 'hint', 'error', 'isTextarea', 'value']
}
