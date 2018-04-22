$(document).ready(() => {
  var keycodes = getKeycodes();

  $.each(keycodes, createKeyCodeUI);

  var $keycodes = $('.keycode'); // wait until they are created

  return;

  ////////////////////////////////////////
  //
  // Implementation goes here
  //
  ////////////////////////////////////////

  function createKeyCodeUI(k, d) {
    if (d.code) {
      var keycode = $('<div>', {
        class: 'keycode keycode-' + d.width + ' keycode-' + d.type,
        'data-code': d.code,
        'data-type': d.type,
        html: d.name,
        title: d.title
      });
      $('#keycodes').append(keycode);
    } else {
      $('#keycodes').append(
        $('<div>', {
          class: 'space space-' + d.width,
          html: d.label
        })
      );
    }
  }

  function getKeycodes() {
    return [
      {
        label: 'KC_<br>ESC',
        x: 0,
        y: 1.5
      },
      {
        label: 'KC_<br>F1',
        x: 2,
        y: 1.5
      },
      {
        label: 'KC_<br>F2',
        x: 3,
        y: 1.5
      },
      {
        label: 'KC_<br>F3',
        x: 4,
        y: 1.5
      },
      {
        label: 'KC_<br>F4',
        x: 5,
        y: 1.5
      },
      {
        label: 'KC_<br>F5',
        x: 6.5,
        y: 1.5
      },
      {
        label: 'KC_<br>F6',
        x: 7.5,
        y: 1.5
      },
      {
        label: 'KC_<br>F7',
        x: 8.5,
        y: 1.5
      },
      {
        label: 'KC_<br>F8',
        x: 9.5,
        y: 1.5
      },
      {
        label: 'KC_<br>F9',
        x: 11,
        y: 1.5
      },
      {
        label: 'KC_<br>F10',
        x: 12,
        y: 1.5
      },
      {
        label: 'KC_<br>F11',
        x: 13,
        y: 1.5
      },
      {
        label: 'KC_<br>F12',
        x: 14,
        y: 1.5
      },
      {
        label: 'KC_<br>PSCR',
        x: 15.5,
        y: 1.5
      },
      {
        label: 'KC_<br>SLCK',
        x: 16.5,
        y: 1.5
      },
      {
        label: 'KC_<br>PAUS',
        x: 17.5,
        y: 1.5
      },
      {
        label: 'KC_<br>GESC',
        x: 0,
        y: 2.75
      },
      {
        label: 'KC_<br>F13',
        x: 2,
        y: 2.75
      },
      {
        label: 'KC_<br>F14',
        x: 3,
        y: 2.75
      },
      {
        label: 'KC_<br>F15',
        x: 4,
        y: 2.75
      },
      {
        label: 'KC_<br>F16',
        x: 5,
        y: 2.75
      },
      {
        label: 'KC_<br>F17',
        x: 6.5,
        y: 2.75
      },
      {
        label: 'KC_<br>F18',
        x: 7.5,
        y: 2.75
      },
      {
        label: 'KC_<br>F19',
        x: 8.5,
        y: 2.75
      },
      {
        label: 'KC_<br>F20',
        x: 9.5,
        y: 2.75
      },
      {
        label: 'KC_<br>F21',
        x: 11,
        y: 2.75
      },
      {
        label: 'KC_<br>F22',
        x: 12,
        y: 2.75
      },
      {
        label: 'KC_<br>F23',
        x: 13,
        y: 2.75
      },
      {
        label: 'KC_<br>F24',
        x: 14,
        y: 2.75
      },
      {
        label: 'KC_<br>PEQL',
        x: 19,
        y: 2.75
      },
      {
        label: 'KC_<br>PCCM',
        x: 20,
        y: 2.75
      },
      {
        label: 'KC_<br>GRV',
        x: 0,
        y: 4
      },
      {
        label: 'KC_<br>1',
        x: 1,
        y: 4
      },
      {
        label: 'KC_<br>2',
        x: 2,
        y: 4
      },
      {
        label: 'KC_<br>3',
        x: 3,
        y: 4
      },
      {
        label: 'KC_<br>4',
        x: 4,
        y: 4
      },
      {
        label: 'KC_<br>5',
        x: 5,
        y: 4
      },
      {
        label: 'KC_<br>6',
        x: 6,
        y: 4
      },
      {
        label: 'KC_<br>7',
        x: 7,
        y: 4
      },
      {
        label: 'KC_<br>8',
        x: 8,
        y: 4
      },
      {
        label: 'KC_<br>9',
        x: 9,
        y: 4
      },
      {
        label: 'KC_<br>0',
        x: 10,
        y: 4
      },
      {
        label: 'KC_<br>MINS',
        x: 11,
        y: 4
      },
      {
        label: 'KC_<br>EQL',
        x: 12,
        y: 4
      },
      {
        label: 'KC_BSPC',
        x: 13,
        y: 4,
        w: 2
      },
      {
        label: 'KC_<br>INS',
        x: 15.5,
        y: 4
      },
      {
        label: 'KC_<br>HOME',
        x: 16.5,
        y: 4
      },
      {
        label: 'KC_<br>PGUP',
        x: 17.5,
        y: 4
      },
      {
        label: 'KC_<br>NLCK',
        x: 19,
        y: 4
      },
      {
        label: 'KC_<br>PSLS',
        x: 20,
        y: 4
      },
      {
        label: 'KC_<br>PAST',
        x: 21,
        y: 4
      },
      {
        label: 'KC_<br>PMNS',
        x: 22,
        y: 4
      },
      {
        label: 'KC_TAB',
        x: 0,
        y: 5,
        w: 1.5
      },
      {
        label: 'KC_<br>Q',
        x: 1.5,
        y: 5
      },
      {
        label: 'KC_<br>W',
        x: 2.5,
        y: 5
      },
      {
        label: 'KC_<br>E',
        x: 3.5,
        y: 5
      },
      {
        label: 'KC_<br>R',
        x: 4.5,
        y: 5
      },
      {
        label: 'KC_<br>T',
        x: 5.5,
        y: 5
      },
      {
        label: 'KC_<br>Y',
        x: 6.5,
        y: 5
      },
      {
        label: 'KC_<br>U',
        x: 7.5,
        y: 5
      },
      {
        label: 'KC_<br>I',
        x: 8.5,
        y: 5
      },
      {
        label: 'KC_<br>O',
        x: 9.5,
        y: 5
      },
      {
        label: 'KC_<br>P',
        x: 10.5,
        y: 5
      },
      {
        label: 'KC_<br>LBRC',
        x: 11.5,
        y: 5
      },
      {
        label: 'KC_<br>RBRC',
        x: 12.5,
        y: 5
      },
      {
        label: 'KC_BSLS',
        x: 13.5,
        y: 5,
        w: 1.5
      },
      {
        label: 'KC_<br>DEL',
        x: 15.5,
        y: 5
      },
      {
        label: 'KC_<br>END',
        x: 16.5,
        y: 5
      },
      {
        label: 'KC_<br>PGDN',
        x: 17.5,
        y: 5
      },
      {
        label: 'KC_<br>P7',
        x: 19,
        y: 5
      },
      {
        label: 'KC_<br>P8',
        x: 20,
        y: 5
      },
      {
        label: 'KC_<br>P9',
        x: 21,
        y: 5
      },
      {
        label: 'KC_<br>PPLS',
        x: 22,
        y: 5,
        h: 2
      },
      {
        label: 'KC_CAPS',
        x: 0,
        y: 6,
        w: 1.75
      },
      {
        label: 'KC_<br>A',
        x: 1.75,
        y: 6
      },
      {
        label: 'KC_<br>S',
        x: 2.75,
        y: 6
      },
      {
        label: 'KC_<br>D',
        x: 3.75,
        y: 6
      },
      {
        label: 'KC_<br>F',
        x: 4.75,
        y: 6
      },
      {
        label: 'KC_<br>G',
        x: 5.75,
        y: 6
      },
      {
        label: 'KC_<br>H',
        x: 6.75,
        y: 6
      },
      {
        label: 'KC_<br>J',
        x: 7.75,
        y: 6
      },
      {
        label: 'KC_<br>K',
        x: 8.75,
        y: 6
      },
      {
        label: 'KC_<br>L',
        x: 9.75,
        y: 6
      },
      {
        label: 'KC_<br>SCLN',
        x: 10.75,
        y: 6
      },
      {
        label: 'KC_<br>QUOT',
        x: 11.75,
        y: 6
      },
      {
        label: 'KC_ENT',
        x: 12.75,
        y: 6,
        w: 2.25
      },
      {
        label: 'KC_<br>P4',
        x: 19,
        y: 6
      },
      {
        label: 'KC_<br>P5',
        x: 20,
        y: 6
      },
      {
        label: 'KC_<br>P6',
        x: 21,
        y: 6
      },
      {
        label: 'KC_LSFT',
        x: 0,
        y: 7,
        w: 2.25
      },
      {
        label: 'KC_<br>Z',
        x: 2.25,
        y: 7
      },
      {
        label: 'KC_<br>X',
        x: 3.25,
        y: 7
      },
      {
        label: 'KC_<br>C',
        x: 4.25,
        y: 7
      },
      {
        label: 'KC_<br>V',
        x: 5.25,
        y: 7
      },
      {
        label: 'KC_<br>B',
        x: 6.25,
        y: 7
      },
      {
        label: 'KC_<br>N',
        x: 7.25,
        y: 7
      },
      {
        label: 'KC_<br>M',
        x: 8.25,
        y: 7
      },
      {
        label: 'KC_<br>COMM',
        x: 9.25,
        y: 7
      },
      {
        label: 'KC_<br>DOT',
        x: 10.25,
        y: 7
      },
      {
        label: 'KC_<br>SLSH',
        x: 11.25,
        y: 7
      },
      {
        label: 'KC_RSFT',
        x: 12.25,
        y: 7,
        w: 2.75
      },
      {
        label: 'KC_<br>UP',
        x: 16.5,
        y: 7
      },
      {
        label: 'KC_<br>P1',
        x: 19,
        y: 7
      },
      {
        label: 'KC_<br>P2',
        x: 20,
        y: 7
      },
      {
        label: 'KC_<br>P3',
        x: 21,
        y: 7
      },
      {
        label: 'KC_<br>PENT',
        x: 22,
        y: 7,
        h: 2
      },
      {
        label: 'KC_<br>LCTL',
        x: 0,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>LGUI',
        x: 1.25,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>LALT',
        x: 2.5,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_SPC',
        x: 3.75,
        y: 8,
        w: 6.25
      },
      {
        label: 'KC_<br>RALT',
        x: 10,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>RGUI',
        x: 11.25,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>APP',
        x: 12.5,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>RCTL',
        x: 13.75,
        y: 8,
        w: 1.25
      },
      {
        label: 'KC_<br>LEFT',
        x: 15.5,
        y: 8
      },
      {
        label: 'KC_<br>DOWN',
        x: 16.5,
        y: 8
      },
      {
        label: 'KC_<br>RGHT',
        x: 17.5,
        y: 8
      },
      {
        label: 'KC_P0',
        x: 19,
        y: 8,
        w: 2
      },
      {
        label: 'KC_<br>PDOT',
        x: 21,
        y: 8
      },
      {
        x: 0,
        y: 10
      },
      {
        x: 1,
        y: 10
      },
      {
        x: 2,
        y: 10
      },
      {
        x: 3,
        y: 10
      },
      {
        x: 4,
        y: 10
      },
      {
        x: 5,
        y: 10
      },
      {
        x: 6,
        y: 10
      },
      {
        x: 7,
        y: 10
      },
      {
        x: 8,
        y: 10
      },
      {
        x: 9,
        y: 10
      },
      {
        x: 10,
        y: 10
      },
      {
        x: 11,
        y: 10
      },
      {
        x: 12,
        y: 10
      },
      {
        label: 'KC_<br>YEN',
        x: 13,
        y: 10
      },
      {
        x: 14,
        y: 10
      },
      {
        label: 'KC_LCAP',
        x: 16.5,
        y: 10,
        w: 1.75
      },
      {
        label: 'KC_LNUM',
        x: 18.25,
        y: 10,
        w: 1.75
      },
      {
        label: 'KC_LSCR',
        x: 20,
        y: 10,
        w: 1.75
      },
      {
        x: 0,
        y: 11,
        w: 1.5
      },
      {
        x: 1.5,
        y: 11
      },
      {
        x: 2.5,
        y: 11
      },
      {
        x: 3.5,
        y: 11
      },
      {
        x: 4.5,
        y: 11
      },
      {
        x: 5.5,
        y: 11
      },
      {
        x: 6.5,
        y: 11
      },
      {
        x: 7.5,
        y: 11
      },
      {
        x: 8.5,
        y: 11
      },
      {
        x: 9.5,
        y: 11
      },
      {
        x: 10.5,
        y: 11
      },
      {
        x: 11.5,
        y: 11
      },
      {
        x: 12.5,
        y: 11
      },
      {
        label: 'KC_ENT',
        x: 13.75,
        y: 11,
        w: 1.25,
        h: 2
      },
      {
        x: 0,
        y: 12,
        w: 1.75
      },
      {
        x: 1.75,
        y: 12
      },
      {
        x: 2.75,
        y: 12
      },
      {
        x: 3.75,
        y: 12
      },
      {
        x: 4.75,
        y: 12
      },
      {
        x: 5.75,
        y: 12
      },
      {
        x: 6.75,
        y: 12
      },
      {
        x: 7.75,
        y: 12
      },
      {
        x: 8.75,
        y: 12
      },
      {
        x: 9.75,
        y: 12
      },
      {
        x: 10.75,
        y: 12
      },
      {
        x: 11.75,
        y: 12
      },
      {
        label: 'KC_<br>NUHS',
        x: 12.75,
        y: 12
      },
      {
        label: 'RESET',
        x: 16.5,
        y: 12,
        w: 1.25
      },
      {
        label: 'DEBUG',
        x: 17.75,
        y: 12,
        w: 1.25
      },
      {
        label: 'KC_<br>NO',
        x: 19,
        y: 12,
        w: 1.25
      },
      {
        label: 'KC_<br>TRNS',
        x: 20.25,
        y: 12,
        w: 1.25
      },
      {
        x: 0,
        y: 13,
        w: 1.25
      },
      {
        label: 'KC_<br>NUBS',
        x: 1.25,
        y: 13
      },
      {
        x: 2.25,
        y: 13
      },
      {
        x: 3.25,
        y: 13
      },
      {
        x: 4.25,
        y: 13
      },
      {
        x: 5.25,
        y: 13
      },
      {
        x: 6.25,
        y: 13
      },
      {
        x: 7.25,
        y: 13
      },
      {
        x: 8.25,
        y: 13
      },
      {
        x: 9.25,
        y: 13
      },
      {
        x: 10.25,
        y: 13
      },
      {
        x: 11.25,
        y: 13
      },
      {
        label: 'KC_<br>RO',
        x: 12.25,
        y: 13
      },
      {
        x: 13.25,
        y: 13,
        w: 1.75
      },
      {
        label: 'KC_<br>HYPR',
        x: 16.5,
        y: 13,
        w: 1.25
      },
      {
        label: 'KC_<br>MEH',
        x: 17.75,
        y: 13,
        w: 1.25
      },
      {
        label: 'KC_<br>LOCK',
        x: 19,
        y: 13,
        w: 1.25
      },
      {
        x: 0,
        y: 14,
        w: 1.25
      },
      {
        x: 1.25,
        y: 14,
        w: 1.25
      },
      {
        x: 2.5,
        y: 14,
        w: 1.25
      },
      {
        label: 'KC_<br>MHEN',
        x: 3.75,
        y: 14,
        w: 1.25
      },
      {
        x: 5,
        y: 14,
        w: 4
      },
      {
        label: 'KC_<br>HENK',
        x: 9,
        y: 14,
        w: 1.25
      },
      {
        label: 'KC_<br>KANA',
        x: 10.25,
        y: 14,
        w: 1.25
      },
      {
        x: 11.5,
        y: 14,
        w: 1.25
      },
      {
        x: 12.75,
        y: 14
      },
      {
        x: 13.75,
        y: 14,
        w: 1.25
      },
      {
        label: 'KC_<br>MUTE',
        x: 16.5,
        y: 15,
        w: 1.25
      },
      {
        label: 'KC_<br>VOLU',
        x: 17.75,
        y: 15,
        w: 1.25
      },
      {
        label: 'KC_<br>VOLD',
        x: 19,
        y: 15,
        w: 1.25
      },
      {
        label: 'KC_<br>MSTP',
        x: 20.25,
        y: 15,
        w: 1.25
      },
      {
        label: 'KC_<br>MPLY',
        x: 21.5,
        y: 15,
        w: 1.25
      },
      {
        label: 'KC_<br>TILD',
        x: 0,
        y: 16
      },
      {
        label: 'KC_<br>EXLM',
        x: 1,
        y: 16
      },
      {
        label: 'KC_<br>AT',
        x: 2,
        y: 16
      },
      {
        label: 'KC_<br>HASH',
        x: 3,
        y: 16
      },
      {
        label: 'KC_<br>DLR',
        x: 4,
        y: 16
      },
      {
        label: 'KC_<br>PERC',
        x: 5,
        y: 16
      },
      {
        label: 'KC_<br>CIRC',
        x: 6,
        y: 16
      },
      {
        label: 'KC_<br>AMPR',
        x: 7,
        y: 16
      },
      {
        label: 'KC_<br>ASTR',
        x: 8,
        y: 16
      },
      {
        label: 'KC_<br>LPRN',
        x: 9,
        y: 16
      },
      {
        label: 'KC_<br>RPRN',
        x: 10,
        y: 16
      },
      {
        label: 'KC_<br>UNDS',
        x: 11,
        y: 16
      },
      {
        label: 'KC_<br>PLUS',
        x: 12,
        y: 16
      },
      {
        x: 13,
        y: 16,
        w: 2
      },
      {
        label: 'KC_<br>MNXT',
        x: 17,
        y: 16,
        w: 1.25
      },
      {
        label: 'KC_<br>MPRV',
        x: 18.25,
        y: 16,
        w: 1.25
      },
      {
        label: 'KC_<br>MFFD',
        x: 20,
        y: 16,
        w: 1.25
      },
      {
        label: 'KC_<br>MRWD',
        x: 21.25,
        y: 16,
        w: 1.25
      },
      {
        x: 0,
        y: 17,
        w: 1.5
      },
      {
        x: 1.5,
        y: 17
      },
      {
        x: 2.5,
        y: 17
      },
      {
        x: 3.5,
        y: 17
      },
      {
        x: 4.5,
        y: 17
      },
      {
        x: 5.5,
        y: 17
      },
      {
        x: 6.5,
        y: 17
      },
      {
        x: 7.5,
        y: 17
      },
      {
        x: 8.5,
        y: 17
      },
      {
        x: 9.5,
        y: 17
      },
      {
        x: 10.5,
        y: 17
      },
      {
        label: 'KC_<br>LCBR',
        x: 11.5,
        y: 17
      },
      {
        label: 'KC_<br>RCBR',
        x: 12.5,
        y: 17
      },
      {
        label: 'KC_<br>PIPE',
        x: 13.5,
        y: 17,
        w: 1.5
      },
      {
        x: 0,
        y: 18,
        w: 1.75
      },
      {
        x: 1.75,
        y: 18
      },
      {
        x: 2.75,
        y: 18
      },
      {
        x: 3.75,
        y: 18
      },
      {
        x: 4.75,
        y: 18
      },
      {
        x: 5.75,
        y: 18
      },
      {
        x: 6.75,
        y: 18
      },
      {
        x: 7.75,
        y: 18
      },
      {
        x: 8.75,
        y: 18
      },
      {
        x: 9.75,
        y: 18
      },
      {
        label: 'KC_<br>COLN',
        x: 10.75,
        y: 18
      },
      {
        label: 'KC_<br>DQUO',
        x: 11.75,
        y: 18
      },
      {
        x: 12.75,
        y: 18,
        w: 2.25
      },
      {
        label: 'KC_<br>HELP',
        x: 16.5,
        y: 18,
        w: 1.25
      },
      {
        label: 'KC_<br>UNDO',
        x: 17.75,
        y: 18,
        w: 1.25
      },
      {
        label: 'KC_<br>CUT',
        x: 19,
        y: 18,
        w: 1.25
      },
      {
        label: 'KC_<br>COPY',
        x: 20.25,
        y: 18,
        w: 1.25
      },
      {
        label: 'KC_<br>PASTE',
        x: 21.5,
        y: 18,
        w: 1.25
      },
      {
        x: 0,
        y: 19,
        w: 2.25
      },
      {
        x: 2.25,
        y: 19
      },
      {
        x: 3.25,
        y: 19
      },
      {
        x: 4.25,
        y: 19
      },
      {
        x: 5.25,
        y: 19
      },
      {
        x: 6.25,
        y: 19
      },
      {
        x: 7.25,
        y: 19
      },
      {
        x: 8.25,
        y: 19
      },
      {
        label: 'KC_<br>LABK',
        x: 9.25,
        y: 19
      },
      {
        label: 'KC_<br>RABK',
        x: 10.25,
        y: 19
      },
      {
        label: 'KC_<br>QUES',
        x: 11.25,
        y: 19
      },
      {
        x: 12.25,
        y: 19,
        w: 2.75
      },
      {
        label: 'KC_<br>FIND',
        x: 16.5,
        y: 19,
        w: 1.25
      },
      {
        label: 'KC_<br>SYSREQ',
        x: 17.75,
        y: 19,
        w: 1.25
      },
      {
        label: 'KC_<br>CANCEL',
        x: 19,
        y: 19,
        w: 1.25
      },
      {
        label: 'KC_<br>PWR',
        x: 20.25,
        y: 19,
        w: 1.25
      },
      {
        label: 'KC_<br>SLEP',
        x: 21.5,
        y: 19,
        w: 1.25
      },
      {
        x: 0,
        y: 20,
        w: 1.25
      },
      {
        x: 1.25,
        y: 20,
        w: 1.25
      },
      {
        x: 2.5,
        y: 20,
        w: 1.25
      },
      {
        x: 3.75,
        y: 20,
        w: 6.25
      },
      {
        x: 10,
        y: 20,
        w: 1.25
      },
      {
        x: 11.25,
        y: 20,
        w: 1.25
      },
      {
        x: 12.5,
        y: 20,
        w: 1.25
      },
      {
        x: 13.75,
        y: 20,
        w: 1.25
      },
      {
        label: 'KC_<br>CALC',
        x: 16.5,
        y: 20,
        w: 1.25
      },
      {
        label: 'KC_<br>MYCM',
        x: 17.75,
        y: 20,
        w: 1.25
      },
      {
        label: 'KC_<br>WAKE',
        x: 19,
        y: 20,
        w: 1.25
      },
      {
        label: 'KC_<br>MAIL',
        x: 20.25,
        y: 20,
        w: 1.25
      },
      {
        label: 'MO(0)',
        x: 0,
        y: 22
      },
      {
        label: 'MO(1)',
        x: 1,
        y: 22
      },
      {
        label: 'MO(2)',
        x: 2,
        y: 22
      },
      {
        label: 'MO(3)',
        x: 3,
        y: 22
      },
      {
        label: 'MO(4)',
        x: 4,
        y: 22
      },
      {
        label: 'MO(5)',
        x: 5,
        y: 22
      },
      {
        label: 'MO(6)',
        x: 6,
        y: 22
      },
      {
        label: 'MO(7)',
        x: 7,
        y: 22
      },
      {
        label: 'MO(8)',
        x: 8,
        y: 22
      },
      {
        label: 'MO(9)',
        x: 9,
        y: 22
      },
      {
        label: 'MO(10)',
        x: 10,
        y: 22
      },
      {
        label: 'MO(11)',
        x: 11,
        y: 22
      },
      {
        label: 'MO(12)',
        x: 12,
        y: 22
      },
      {
        label: 'MO(13)',
        x: 13,
        y: 22
      },
      {
        label: 'MO(14)',
        x: 14,
        y: 22
      },
      {
        label: 'MO(15)',
        x: 15,
        y: 22
      },
      {
        label: 'KC_<br>WSCH',
        x: 16.5,
        y: 22,
        w: 1.25
      },
      {
        label: 'KC_<br>WHOM',
        x: 17.75,
        y: 22,
        w: 1.25
      },
      {
        label: 'KC_<br>WBAK',
        x: 19,
        y: 22,
        w: 1.25
      },
      {
        label: 'KC_<br>WFWD',
        x: 20.25,
        y: 22,
        w: 1.25
      },
      {
        label: 'MO(16)',
        x: 0,
        y: 23
      },
      {
        label: 'MO(17)',
        x: 1,
        y: 23
      },
      {
        label: 'MO(18)',
        x: 2,
        y: 23
      },
      {
        label: 'MO(19)',
        x: 3,
        y: 23
      },
      {
        label: 'MO(20)',
        x: 4,
        y: 23
      },
      {
        label: 'MO(21)',
        x: 5,
        y: 23
      },
      {
        label: 'MO(22)',
        x: 6,
        y: 23
      },
      {
        label: 'MO(23)',
        x: 7,
        y: 23
      },
      {
        label: 'MO(24)',
        x: 8,
        y: 23
      },
      {
        label: 'MO(25)',
        x: 9,
        y: 23
      },
      {
        label: 'MO(26)',
        x: 10,
        y: 23
      },
      {
        label: 'MO(27)',
        x: 11,
        y: 23
      },
      {
        label: 'MO(28)',
        x: 12,
        y: 23
      },
      {
        label: 'MO(29)',
        x: 13,
        y: 23
      },
      {
        label: 'MO(30)',
        x: 14,
        y: 23
      },
      {
        label: 'MO(31)',
        x: 15,
        y: 23
      },
      {
        label: 'KC_<br>WSTP',
        x: 16.5,
        y: 23,
        w: 1.25
      },
      {
        label: 'KC_<br>WREF',
        x: 17.75,
        y: 23,
        w: 1.25
      },
      {
        label: 'KC_<br>WFAV',
        x: 19,
        y: 23,
        w: 1.25
      },
      {
        label: 'TG(0)',
        x: 0,
        y: 25
      },
      {
        label: 'TG(1)',
        x: 1,
        y: 25
      },
      {
        label: 'TG(2)',
        x: 2,
        y: 25
      },
      {
        label: 'TG(3)',
        x: 3,
        y: 25
      },
      {
        label: 'TG(4)',
        x: 4,
        y: 25
      },
      {
        label: 'TG(5)',
        x: 5,
        y: 25
      },
      {
        label: 'TG(6)',
        x: 6,
        y: 25
      },
      {
        label: 'TG(7)',
        x: 7,
        y: 25
      },
      {
        label: 'TG(8)',
        x: 8,
        y: 25
      },
      {
        label: 'TG(9)',
        x: 9,
        y: 25
      },
      {
        label: 'TG(10)',
        x: 10,
        y: 25
      },
      {
        label: 'TG(11)',
        x: 11,
        y: 25
      },
      {
        label: 'TG(12)',
        x: 12,
        y: 25
      },
      {
        label: 'TG(13)',
        x: 13,
        y: 25
      },
      {
        label: 'TG(14)',
        x: 14,
        y: 25
      },
      {
        label: 'TG(15)',
        x: 15,
        y: 25
      },
      {
        label: 'BL_<br>TOGG',
        x: 16.5,
        y: 25
      },
      {
        label: 'BL_<br>STEP',
        x: 17.5,
        y: 25
      },
      {
        label: 'BL_<br>ON',
        x: 18.5,
        y: 25
      },
      {
        label: 'BL_<br>OFF',
        x: 19.5,
        y: 25
      },
      {
        label: 'BL_<br>INC',
        x: 20.5,
        y: 25
      },
      {
        label: 'BL_<br>DEC',
        x: 21.5,
        y: 25
      },
      {
        label: 'BL_<br>BRTG',
        x: 22.5,
        y: 25
      },
      {
        label: 'TG(16)',
        x: 0,
        y: 26
      },
      {
        label: 'TG(17)',
        x: 1,
        y: 26
      },
      {
        label: 'TG(18)',
        x: 2,
        y: 26
      },
      {
        label: 'TG(19)',
        x: 3,
        y: 26
      },
      {
        label: 'TG(20)',
        x: 4,
        y: 26
      },
      {
        label: 'TG(21)',
        x: 5,
        y: 26
      },
      {
        label: 'TG(22)',
        x: 6,
        y: 26
      },
      {
        label: 'TG(23)',
        x: 7,
        y: 26
      },
      {
        label: 'TG(24)',
        x: 8,
        y: 26
      },
      {
        label: 'TG(25)',
        x: 9,
        y: 26
      },
      {
        label: 'TG(26)',
        x: 10,
        y: 26
      },
      {
        label: 'TG(27)',
        x: 11,
        y: 26
      },
      {
        label: 'TG(28)',
        x: 12,
        y: 26
      },
      {
        label: 'TG(29)',
        x: 13,
        y: 26
      },
      {
        label: 'TG(30)',
        x: 14,
        y: 26
      },
      {
        label: 'TG(31)',
        x: 15,
        y: 26
      },
      {
        label: 'RGB_<BR>TOG',
        x: 17.75,
        y: 27
      },
      {
        label: 'RGB_<BR>MOD',
        x: 18.75,
        y: 27
      },
      {
        label: 'RGB_<BR>RMOD',
        x: 19.75,
        y: 27
      },
      {
        label: 'OSL(0)',
        x: 0,
        y: 28
      },
      {
        label: 'OSL(1)',
        x: 1,
        y: 28
      },
      {
        label: 'OSL(2)',
        x: 2,
        y: 28
      },
      {
        label: 'OSL(3)',
        x: 3,
        y: 28
      },
      {
        label: 'OSL(4)',
        x: 4,
        y: 28
      },
      {
        label: 'OSL(5)',
        x: 5,
        y: 28
      },
      {
        label: 'OSL(6)',
        x: 6,
        y: 28
      },
      {
        label: 'OSL(7)',
        x: 7,
        y: 28
      },
      {
        label: 'OSL(8)',
        x: 8,
        y: 28
      },
      {
        label: 'OSL(9)',
        x: 9,
        y: 28
      },
      {
        label: 'OSL(10)',
        x: 10,
        y: 28
      },
      {
        label: 'OSL(11)',
        x: 11,
        y: 28
      },
      {
        label: 'OSL(12)',
        x: 12,
        y: 28
      },
      {
        label: 'OSL(13)',
        x: 13,
        y: 28
      },
      {
        label: 'OSL(14)',
        x: 14,
        y: 28
      },
      {
        label: 'OSL(15)',
        x: 15,
        y: 28
      },
      {
        label: 'RGB_<BR>HUI',
        x: 17.75,
        y: 28
      },
      {
        label: 'RGB_<BR>HUD',
        x: 18.75,
        y: 28
      },
      {
        label: 'RGB_<BR>SAI',
        x: 19.75,
        y: 28
      },
      {
        label: 'RGB_<BR>SAD',
        x: 20.75,
        y: 28
      },
      {
        label: 'RGB_<BR>VAI',
        x: 21.75,
        y: 28
      },
      {
        label: 'RGB_<BR>VAD',
        x: 22.75,
        y: 28
      },
      {
        label: 'OSL(16)',
        x: 0,
        y: 29
      },
      {
        label: 'OSL(17)',
        x: 1,
        y: 29
      },
      {
        label: 'OSL(18)',
        x: 2,
        y: 29
      },
      {
        label: 'OSL(19)',
        x: 3,
        y: 29
      },
      {
        label: 'OSL(20)',
        x: 4,
        y: 29
      },
      {
        label: 'OSL(21)',
        x: 5,
        y: 29
      },
      {
        label: 'OSL(22)',
        x: 6,
        y: 29
      },
      {
        label: 'OSL(23)',
        x: 7,
        y: 29
      },
      {
        label: 'OSL(24)',
        x: 8,
        y: 29
      },
      {
        label: 'OSL(25)',
        x: 9,
        y: 29
      },
      {
        label: 'OSL(26)',
        x: 10,
        y: 29
      },
      {
        label: 'OSL(27)',
        x: 11,
        y: 29
      },
      {
        label: 'OSL(28)',
        x: 12,
        y: 29
      },
      {
        label: 'OSL(29)',
        x: 13,
        y: 29
      },
      {
        label: 'OSL(30)',
        x: 14,
        y: 29
      },
      {
        label: 'OSL(31)',
        x: 15,
        y: 29
      },
      {
        label: 'RGB_<BR>M_P',
        x: 17.75,
        y: 29
      },
      {
        label: 'RGB_<BR>M_B',
        x: 18.75,
        y: 29
      },
      {
        label: 'RGB_<BR>M_R',
        x: 19.75,
        y: 29
      },
      {
        label: 'RGB_<BR>M_SW',
        x: 20.75,
        y: 29
      },
      {
        label: 'RGB_<BR>M_SN',
        x: 17.75,
        y: 30
      },
      {
        label: 'RGB_<BR>M_K',
        x: 18.75,
        y: 30
      },
      {
        label: 'RGB_<BR>M_X',
        x: 19.75,
        y: 30
      },
      {
        label: 'RGB_<br>M_G',
        x: 20.75,
        y: 30
      },
      {
        label: 'LCTL(KC)',
        x: 0,
        y: 31,
        w: 1.25
      },
      {
        label: 'LSFT(KC)',
        x: 1.25,
        y: 31,
        w: 1.25
      },
      {
        label: 'LALT(KC)',
        x: 2.5,
        y: 31,
        w: 1.25
      },
      {
        label: 'LGUI(KC)',
        x: 3.75,
        y: 31,
        w: 1.25
      },
      {
        label: 'RCTL(KC)',
        x: 5,
        y: 31,
        w: 1.25
      },
      {
        label: 'RSFT(KC)',
        x: 6.25,
        y: 31,
        w: 1.25
      },
      {
        label: 'RALT(KC)',
        x: 7.5,
        y: 31,
        w: 1.25
      },
      {
        label: 'RGUI(KC)',
        x: 8.75,
        y: 31,
        w: 1.25
      },
      {
        label: 'HYPR(KC)',
        x: 10,
        y: 31,
        w: 1.25
      },
      {
        label: 'MEH(KC)',
        x: 11.25,
        y: 31,
        w: 1.25
      },
      {
        label: 'LCAG(KC)',
        x: 12.5,
        y: 31,
        w: 1.25
      },
      {
        label: 'ALTG(KC)',
        x: 13.75,
        y: 31,
        w: 1.25
      },
      {
        label: 'SGUI(KC)',
        x: 15,
        y: 31,
        w: 1.25
      },
      {
        label: 'LCA(KC)',
        x: 16.25,
        y: 31,
        w: 1.25
      },
      {
        label: 'LCTL_T(KC)',
        x: 0,
        y: 33,
        w: 1.5
      },
      {
        label: 'LSFT_T(KC)',
        x: 1.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'LALT_T(KC)',
        x: 3,
        y: 33,
        w: 1.5
      },
      {
        label: 'LGUI_T(KC)',
        x: 4.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'RCTL_T(KC)',
        x: 6,
        y: 33,
        w: 1.5
      },
      {
        label: 'RSFT_T(KC)',
        x: 7.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'RALT_T(KC)',
        x: 9,
        y: 33,
        w: 1.5
      },
      {
        label: 'RGUI_T(KC)',
        x: 10.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'ALL_T(KC)',
        x: 12,
        y: 33,
        w: 1.5
      },
      {
        label: 'MEH_T(KC)',
        x: 13.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'LCAG_T(KC)',
        x: 15,
        y: 33,
        w: 1.5
      },
      {
        label: 'SGUI_T(KC)',
        x: 16.5,
        y: 33,
        w: 1.5
      },
      {
        label: 'LCA_T(KC)',
        x: 18,
        y: 33,
        w: 1.5
      },
      {
        label: 'KC_<br>MS_U',
        x: 1,
        y: 35.5
      },
      {
        label: 'KC_<br>ACL2',
        x: 8,
        y: 35.5
      },
      {
        label: 'KC_<br>WH_U',
        x: 11,
        y: 35.5
      },
      {
        label: 'KC_<br>BTN1',
        x: 3.75,
        y: 36
      },
      {
        label: 'KC_<br>BTN3',
        x: 4.75,
        y: 36
      },
      {
        label: 'KC_<br>BTN2',
        x: 5.75,
        y: 36
      },
      {
        label: 'KC_<br>MS_L',
        x: 0,
        y: 36.5
      },
      {
        label: 'KC_<br>MS_R',
        x: 2,
        y: 36.5
      },
      {
        label: 'KC_<br>ACL1',
        x: 8,
        y: 36.5
      },
      {
        label: 'KC_<br>WH_L',
        x: 10,
        y: 36.5
      },
      {
        label: 'KC_<br>WH_R',
        x: 12,
        y: 36.5
      },
      {
        label: 'KC_<br>BTN4',
        x: 4.25,
        y: 37
      },
      {
        label: 'KC_<br>BTN5',
        x: 5.25,
        y: 37
      },
      {
        label: 'KC_<br>MS_D',
        x: 1,
        y: 37.5
      },
      {
        label: 'KC_<br>ACL0',
        x: 8,
        y: 37.5
      },
      {
        label: 'KC_<br>WH_D',
        x: 11,
        y: 37.5
      },
      {
        label: 'MAGIC_<br>SWAP_CONTROL_CAPSLOCK',
        x: 0,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_CONTROL_CAPSLOCK',
        x: 3.75,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>CAPSLOCK_TO_CONTROL',
        x: 7.5,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNCAPSLOCK_TO_CONTROL',
        x: 11.25,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>SWAP_BACKSLASH_BACKSPACE',
        x: 15,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_BACKSLASH_BACKSPACE',
        x: 18.75,
        y: 39.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>SWAP_LALT_LGUI',
        x: 0,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_LALT_LGUI',
        x: 3.75,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>SWAP_RALT_RGUI',
        x: 7.5,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_RALT_RGUI',
        x: 11.25,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>SWAP_ALT_GUI',
        x: 15,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_ALT_GUI',
        x: 18.75,
        y: 40.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>NO_GUI',
        x: 0,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNNO_GUI',
        x: 3.75,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>SWAP_GRAVE_ESC',
        x: 7.5,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNSWAP_GRAVE_ESC',
        x: 11.25,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>HOST_NKRO',
        x: 15,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>UNHOST_NKRO',
        x: 18.75,
        y: 41.5,
        w: 3.75
      },
      {
        label: 'MAGIC_<br>TOGGLE_NKRO',
        x: 0,
        y: 42.5,
        w: 3.75
      }
    ];
  }
});
