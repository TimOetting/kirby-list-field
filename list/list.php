<?php

class ListField extends BaseField {

  public $type = 'text';
  public $min  = 0;
  public $max  = false;

  static public $assets = array(
    'js' => array(
      'list.js'
    ),
    'css' => array(
      'list.css'
    )
  );

  public function inputField($value) {

    $input = new Brick('input', null);
    $input->addClass('input');
    $input->attr(array(
      'type'         => $this->type(),
      'value'        => $value,
      'required'     => $this->required(),
      'name'         => $this->name() . '[]',
      'autocomplete' => $this->autocomplete() === false ? 'off' : 'on',
      'autofocus'    => $this->autofocus(),
      'readonly'     => $this->readonly(),
      'disabled'     => $this->disabled(),
      'id'           => $this->id()
    ));

    if(!is_array($value)) {
      $input->val(html($value, false));
    }

    if($this->readonly()) {
      $input->attr('tabindex', '-1');
      $input->addClass('input-is-readonly');
    }

    return $input;

  }

  public function item($value, $text) {

    $input = $this->input($value);

    $label = new Brick('input', $this->i18n($text));
    $label->addClass('input');
    $label->attr('data-focus', 'true');
    $label->prepend($input);

    if($this->readonly) {
      $label->addClass('input-is-readonly');
    }

    return $label;

  }

  public function content() {

    return tpl::load(__DIR__ . DS . 'template.php', array('field' => $this));

  }

  public function result() {

    $result = parent::result();
    return yaml::encode($result);

  }

  public function value() {

    $value = parent::value();
    return yaml::decode($value);
    
  }

}