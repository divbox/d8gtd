<?php

namespace Drupal\gtd\Form;

use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

class DivboxForm extends FormBase
{

    public function getFormId()
    {
        return 'divbox_form';
    }

    public function buildForm(array $form, FormStateInterface $form_state)
    {
        $form['first_name'] = [
            '#type' => 'textfield',
            '#title' => 'Please enter Fname',
            '#required' => true
        ];

        $form['submit'] = [
            '#type' => 'submit',
            '#value' => 'hit me',
        ];

        return $form;
    }

    public function validateForm(array &$form, FormStateInterface $form_state)
    {

    }

    public function submitForm(array &$form, FormStateInterface $form_state)
    {

    }
}