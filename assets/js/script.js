$(document).ready(() => {
  var keycodes = getKeycodes();

  var ctrl = {};
  ctrl.svg = d3.select('#qmkcodes');
  ctrl.g = ctrl.svg.append('g');
  ctrl.node = ctrl.g
    .append('g')
    .attr('class', 'keycodes')
    .selectAll('g');
  ctrl.node = ctrl.node.data(keycodes, function(d) {
    if (d.name) {
      return d.name;
    }
    return d.x + '-' + d.y;
  });
  ctrl.node = ctrl.node
    .enter()
    .append('g')
    .attr('class', 'keycode')
    .each(newSVGKeycode);

  $('#filter').keyup(filterKeys);

  return;

  ////////////////////////////////////////
  //
  // Implementation goes here
  //
  ////////////////////////////////////////

  function filterKeys(/*event*/) {
    console.log('filtering', $('#filter').val());
  }

  function newSVGKeycode(d) {
    var el = d3.select(this);
    var width = 40;
    var height = 40;
    var xSpace = width * 1.1;
    var ySpace = width * 1.1;
    var w = _.isUndefined(d.w) ? width : xSpace * d.w - (xSpace - width);
    var fontSize = '10px';
    var box;
    if (d.title) {
      var text = el
        .append('text')
        .attr('font-family', 'sans-serif')
        .attr('font-size', d.fontSize)
        .attr('fill', '#000')
        .text(d.title);
      if (d.r) {
        var transform = [
          [
            'translate(',
            d.x * xSpace + width * 0.33,
            ',',
            d.y * ySpace + ySpace * 0.66,
            ')'
          ].join(''),
          ['rotate(', d.r, ')'].join('')
        ].join(' ');
        text.attr('transform', transform);
      } else {
        text.attr('x', d.x * xSpace).attr('y', d.y * ySpace + ySpace * 0.66);
      }
      return text;
    }

    if (d.name === 'KC_ENT' && d.h && d.h === 2) {
      // iso key
      var path = [
        ['M', width * 0.25 * -1, ',', 0].join(''),
        ['L', w, ',', 0].join(''),
        ['L', w, ',', d.h * ySpace - (xSpace - width)].join(''),
        ['L', 0, ',', d.h * ySpace - (xSpace - width)].join(''),
        ['L', 0, ',', height].join(''),
        ['L', width * 0.25 * -1, ',', height].join(''),
        'Z'
      ].join('');
      box = el
        .append('path')
        .attr('d', path)
        .attr(
          'transform',
          ['translate(', d.x * xSpace, ',', d.y * ySpace, ')'].join('')
        );
    } else {
      var h = _.isUndefined(d.h) ? height : ySpace * d.h - (ySpace - width);
      box = el
        .append('rect')
        .attr('rx', '2px')
        .attr('ry', '2px')
        .attr('width', w)
        .attr('height', h)
        .attr('x', d.x * xSpace)
        .attr('y', d.y * ySpace);
    }
    box
      .attr('stroke', '#333')
      .attr('strokeWidth', '2px')
      .attr('fill', '#eee');
    if (d.name && d.name.includes('\n')) {
      var parts = d.name.split('\n');
      var offset = 0;
      parts.forEach(function(part) {
        el
          .append('text')
          .attr('x', d.x * xSpace + 4)
          .attr('y', d.y * ySpace + 12 + offset)
          .attr('font-family', 'sans-serif')
          .attr('font-size', fontSize)
          .attr('fill', '#000')
          .text(part);
        offset += 10;
      });
    } else {
      el
        .append('text')
        .attr('x', d.x * xSpace + 4)
        .attr('y', d.y * ySpace + 12)
        .attr('font-family', 'sans-serif')
        .attr('font-size', fontSize)
        .attr('fill', '#000')
        .text(d.name);
    }
    return box;
  }

  function getKeycodes() {
    var title2FontSize = '20px';
    var title3FontSize = '10px';
    return [
      {
        title: 'US ANSI Keys',
        fontSize: title2FontSize,
        x: 0,
        y: 0.5
      },
      {
        name: 'KC_\nESC',
        x: 0,
        y: 1.5
      },
      {
        name: 'KC_\nF1',
        x: 2,
        y: 1.5
      },
      {
        name: 'KC_\nF2',
        x: 3,
        y: 1.5
      },
      {
        name: 'KC_\nF3',
        x: 4,
        y: 1.5
      },
      {
        name: 'KC_\nF4',
        x: 5,
        y: 1.5
      },
      {
        name: 'KC_\nF5',
        x: 6.5,
        y: 1.5
      },
      {
        name: 'KC_\nF6',
        x: 7.5,
        y: 1.5
      },
      {
        name: 'KC_\nF7',
        x: 8.5,
        y: 1.5
      },
      {
        name: 'KC_\nF8',
        x: 9.5,
        y: 1.5
      },
      {
        name: 'KC_\nF9',
        x: 11,
        y: 1.5
      },
      {
        name: 'KC_\nF10',
        x: 12,
        y: 1.5
      },
      {
        name: 'KC_\nF11',
        x: 13,
        y: 1.5
      },
      {
        name: 'KC_\nF12',
        x: 14,
        y: 1.5
      },
      {
        name: 'KC_\nPSCR',
        x: 15.5,
        y: 1.5
      },
      {
        name: 'KC_\nSLCK',
        x: 16.5,
        y: 1.5
      },
      {
        name: 'KC_\nPAUS',
        x: 17.5,
        y: 1.5
      },
      {
        name: 'KC_\nGESC',
        x: 0,
        y: 2.75
      },
      {
        name: 'KC_\nF13',
        x: 2,
        y: 2.75
      },
      {
        name: 'KC_\nF14',
        x: 3,
        y: 2.75
      },
      {
        name: 'KC_\nF15',
        x: 4,
        y: 2.75
      },
      {
        name: 'KC_\nF16',
        x: 5,
        y: 2.75
      },
      {
        name: 'KC_\nF17',
        x: 6.5,
        y: 2.75
      },
      {
        name: 'KC_\nF18',
        x: 7.5,
        y: 2.75
      },
      {
        name: 'KC_\nF19',
        x: 8.5,
        y: 2.75
      },
      {
        name: 'KC_\nF20',
        x: 9.5,
        y: 2.75
      },
      {
        name: 'KC_\nF21',
        x: 11,
        y: 2.75
      },
      {
        name: 'KC_\nF22',
        x: 12,
        y: 2.75
      },
      {
        name: 'KC_\nF23',
        x: 13,
        y: 2.75
      },
      {
        name: 'KC_\nF24',
        x: 14,
        y: 2.75
      },
      {
        name: 'KC_\nPEQL',
        x: 19,
        y: 2.75
      },
      {
        name: 'KC_\nPCCM',
        x: 20,
        y: 2.75
      },
      {
        name: 'KC_\nGRV',
        x: 0,
        y: 4
      },
      {
        name: 'KC_\n1',
        x: 1,
        y: 4
      },
      {
        name: 'KC_\n2',
        x: 2,
        y: 4
      },
      {
        name: 'KC_\n3',
        x: 3,
        y: 4
      },
      {
        name: 'KC_\n4',
        x: 4,
        y: 4
      },
      {
        name: 'KC_\n5',
        x: 5,
        y: 4
      },
      {
        name: 'KC_\n6',
        x: 6,
        y: 4
      },
      {
        name: 'KC_\n7',
        x: 7,
        y: 4
      },
      {
        name: 'KC_\n8',
        x: 8,
        y: 4
      },
      {
        name: 'KC_\n9',
        x: 9,
        y: 4
      },
      {
        name: 'KC_\n0',
        x: 10,
        y: 4
      },
      {
        name: 'KC_\nMINS',
        x: 11,
        y: 4
      },
      {
        name: 'KC_\nEQL',
        x: 12,
        y: 4
      },
      {
        name: 'KC_BSPC',
        x: 13,
        y: 4,
        w: 2
      },
      {
        name: 'KC_\nINS',
        x: 15.5,
        y: 4
      },
      {
        name: 'KC_\nHOME',
        x: 16.5,
        y: 4
      },
      {
        name: 'KC_\nPGUP',
        x: 17.5,
        y: 4
      },
      {
        name: 'KC_\nNLCK',
        x: 19,
        y: 4
      },
      {
        name: 'KC_\nPSLS',
        x: 20,
        y: 4
      },
      {
        name: 'KC_\nPAST',
        x: 21,
        y: 4
      },
      {
        name: 'KC_\nPMNS',
        x: 22,
        y: 4
      },
      {
        name: 'KC_TAB',
        x: 0,
        y: 5,
        w: 1.5
      },
      {
        name: 'KC_\nQ',
        x: 1.5,
        y: 5
      },
      {
        name: 'KC_\nW',
        x: 2.5,
        y: 5
      },
      {
        name: 'KC_\nE',
        x: 3.5,
        y: 5
      },
      {
        name: 'KC_\nR',
        x: 4.5,
        y: 5
      },
      {
        name: 'KC_\nT',
        x: 5.5,
        y: 5
      },
      {
        name: 'KC_\nY',
        x: 6.5,
        y: 5
      },
      {
        name: 'KC_\nU',
        x: 7.5,
        y: 5
      },
      {
        name: 'KC_\nI',
        x: 8.5,
        y: 5
      },
      {
        name: 'KC_\nO',
        x: 9.5,
        y: 5
      },
      {
        name: 'KC_\nP',
        x: 10.5,
        y: 5
      },
      {
        name: 'KC_\nLBRC',
        x: 11.5,
        y: 5
      },
      {
        name: 'KC_\nRBRC',
        x: 12.5,
        y: 5
      },
      {
        name: 'KC_BSLS',
        x: 13.5,
        y: 5,
        w: 1.5
      },
      {
        name: 'KC_\nDEL',
        x: 15.5,
        y: 5
      },
      {
        name: 'KC_\nEND',
        x: 16.5,
        y: 5
      },
      {
        name: 'KC_\nPGDN',
        x: 17.5,
        y: 5
      },
      {
        name: 'KC_\nP7',
        x: 19,
        y: 5
      },
      {
        name: 'KC_\nP8',
        x: 20,
        y: 5
      },
      {
        name: 'KC_\nP9',
        x: 21,
        y: 5
      },
      {
        name: 'KC_\nPPLS',
        x: 22,
        y: 5,
        h: 2
      },
      {
        name: 'KC_CAPS',
        x: 0,
        y: 6,
        w: 1.75
      },
      {
        name: 'KC_\nA',
        x: 1.75,
        y: 6
      },
      {
        name: 'KC_\nS',
        x: 2.75,
        y: 6
      },
      {
        name: 'KC_\nD',
        x: 3.75,
        y: 6
      },
      {
        name: 'KC_\nF',
        x: 4.75,
        y: 6
      },
      {
        name: 'KC_\nG',
        x: 5.75,
        y: 6
      },
      {
        name: 'KC_\nH',
        x: 6.75,
        y: 6
      },
      {
        name: 'KC_\nJ',
        x: 7.75,
        y: 6
      },
      {
        name: 'KC_\nK',
        x: 8.75,
        y: 6
      },
      {
        name: 'KC_\nL',
        x: 9.75,
        y: 6
      },
      {
        name: 'KC_\nSCLN',
        x: 10.75,
        y: 6
      },
      {
        name: 'KC_\nQUOT',
        x: 11.75,
        y: 6
      },
      {
        name: 'KC_ENT',
        x: 12.75,
        y: 6,
        w: 2.25
      },
      {
        name: 'KC_\nP4',
        x: 19,
        y: 6
      },
      {
        name: 'KC_\nP5',
        x: 20,
        y: 6
      },
      {
        name: 'KC_\nP6',
        x: 21,
        y: 6
      },
      {
        name: 'KC_LSFT',
        x: 0,
        y: 7,
        w: 2.25
      },
      {
        name: 'KC_\nZ',
        x: 2.25,
        y: 7
      },
      {
        name: 'KC_\nX',
        x: 3.25,
        y: 7
      },
      {
        name: 'KC_\nC',
        x: 4.25,
        y: 7
      },
      {
        name: 'KC_\nV',
        x: 5.25,
        y: 7
      },
      {
        name: 'KC_\nB',
        x: 6.25,
        y: 7
      },
      {
        name: 'KC_\nN',
        x: 7.25,
        y: 7
      },
      {
        name: 'KC_\nM',
        x: 8.25,
        y: 7
      },
      {
        name: 'KC_\nCOMM',
        x: 9.25,
        y: 7
      },
      {
        name: 'KC_\nDOT',
        x: 10.25,
        y: 7
      },
      {
        name: 'KC_\nSLSH',
        x: 11.25,
        y: 7
      },
      {
        name: 'KC_RSFT',
        x: 12.25,
        y: 7,
        w: 2.75
      },
      {
        name: 'KC_\nUP',
        x: 16.5,
        y: 7
      },
      {
        name: 'KC_\nP1',
        x: 19,
        y: 7
      },
      {
        name: 'KC_\nP2',
        x: 20,
        y: 7
      },
      {
        name: 'KC_\nP3',
        x: 21,
        y: 7
      },
      {
        name: 'KC_\nPENT',
        x: 22,
        y: 7,
        h: 2
      },
      {
        name: 'KC_\nLCTL',
        x: 0,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nLGUI',
        x: 1.25,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nLALT',
        x: 2.5,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_SPC',
        x: 3.75,
        y: 8,
        w: 6.25
      },
      {
        name: 'KC_\nRALT',
        x: 10,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nRGUI',
        x: 11.25,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nAPP',
        x: 12.5,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nRCTL',
        x: 13.75,
        y: 8,
        w: 1.25
      },
      {
        name: 'KC_\nLEFT',
        x: 15.5,
        y: 8
      },
      {
        name: 'KC_\nDOWN',
        x: 16.5,
        y: 8
      },
      {
        name: 'KC_\nRGHT',
        x: 17.5,
        y: 8
      },
      {
        name: 'KC_P0',
        x: 19,
        y: 8,
        w: 2
      },
      {
        name: 'KC_\nPDOT',
        x: 21,
        y: 8
      },
      {
        title: 'Europe and Japan ISO Keys',
        fontSize: title2FontSize,
        x: 0,
        y: 9
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
        name: 'KC_\nYEN',
        x: 13,
        y: 10
      },
      {
        x: 14,
        y: 10
      },
      {
        title: 'Locking Keys',
        fontSize: title2FontSize,
        x: 16.5,
        y: 9
      },
      {
        name: 'KC_LCAP',
        x: 16.5,
        y: 10,
        w: 1.75
      },
      {
        name: 'KC_LNUM',
        x: 18.25,
        y: 10,
        w: 1.75
      },
      {
        name: 'KC_LSCR',
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
        name: 'KC_ENT',
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
        name: 'KC_\nNUHS',
        x: 12.75,
        y: 12
      },
      {
        title: 'Quantum Keycodes',
        fontSize: title2FontSize,
        x: 16.5,
        y: 11
      },
      {
        name: 'RESET',
        x: 16.5,
        y: 12,
        w: 1.25
      },
      {
        name: 'DEBUG',
        x: 17.75,
        y: 12,
        w: 1.25
      },
      {
        name: 'KC_\nNO',
        x: 19,
        y: 12,
        w: 1.25
      },
      {
        name: 'KC_\nTRNS',
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
        name: 'KC_\nNUBS',
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
        name: 'KC_\nRO',
        x: 12.25,
        y: 13
      },
      {
        x: 13.25,
        y: 13,
        w: 1.75
      },
      {
        name: 'KC_\nHYPR',
        x: 16.5,
        y: 13,
        w: 1.25
      },
      {
        name: 'KC_\nMEH',
        x: 17.75,
        y: 13,
        w: 1.25
      },
      {
        name: 'KC_\nLOCK',
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
        name: 'KC_\nMHEN',
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
        name: 'KC_\nHENK',
        x: 9,
        y: 14,
        w: 1.25
      },
      {
        name: 'KC_\nKANA',
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
        title: 'Media Controls',
        fontSize: title2FontSize,
        x: 16.5,
        y: 14
      },
      {
        name: 'KC_\nMUTE',
        x: 16.5,
        y: 15,
        w: 1.25
      },
      {
        name: 'KC_\nVOLU',
        x: 17.75,
        y: 15,
        w: 1.25
      },
      {
        name: 'KC_\nVOLD',
        x: 19,
        y: 15,
        w: 1.25
      },
      {
        name: 'KC_\nMSTP',
        x: 20.25,
        y: 15,
        w: 1.25
      },
      {
        name: 'KC_\nMPLY',
        x: 21.5,
        y: 15,
        w: 1.25
      },
      {
        title: 'US ANSI Keys Shifted',
        fontSize: title2FontSize,
        x: 0,
        y: 15
      },
      {
        name: 'KC_\nTILD',
        x: 0,
        y: 16
      },
      {
        name: 'KC_\nEXLM',
        x: 1,
        y: 16
      },
      {
        name: 'KC_\nAT',
        x: 2,
        y: 16
      },
      {
        name: 'KC_\nHASH',
        x: 3,
        y: 16
      },
      {
        name: 'KC_\nDLR',
        x: 4,
        y: 16
      },
      {
        name: 'KC_\nPERC',
        x: 5,
        y: 16
      },
      {
        name: 'KC_\nCIRC',
        x: 6,
        y: 16
      },
      {
        name: 'KC_\nAMPR',
        x: 7,
        y: 16
      },
      {
        name: 'KC_\nASTR',
        x: 8,
        y: 16
      },
      {
        name: 'KC_\nLPRN',
        x: 9,
        y: 16
      },
      {
        name: 'KC_\nRPRN',
        x: 10,
        y: 16
      },
      {
        name: 'KC_\nUNDS',
        x: 11,
        y: 16
      },
      {
        name: 'KC_\nPLUS',
        x: 12,
        y: 16
      },
      {
        x: 13,
        y: 16,
        w: 2
      },
      {
        title: 'Win',
        fontSize: title3FontSize,
        x: 16.5,
        y: 16,
        r: 270
      },
      {
        name: 'KC_\nMNXT',
        x: 17,
        y: 16,
        w: 1.25
      },
      {
        name: 'KC_\nMPRV',
        x: 18.25,
        y: 16,
        w: 1.25
      },
      {
        title: 'Mac',
        fontSize: title3FontSize,
        x: 19.5,
        y: 16,
        r: 270
      },
      {
        name: 'KC_\nMFFD',
        x: 20,
        y: 16,
        w: 1.25
      },
      {
        name: 'KC_\nMRWD',
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
        name: 'KC_\nLCBR',
        x: 11.5,
        y: 17
      },
      {
        name: 'KC_\nRCBR',
        x: 12.5,
        y: 17
      },
      {
        name: 'KC_\nPIPE',
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
        name: 'KC_\nCOLN',
        x: 10.75,
        y: 18
      },
      {
        name: 'KC_\nDQUO',
        x: 11.75,
        y: 18
      },
      {
        x: 12.75,
        y: 18,
        w: 2.25
      },
      {
        name: 'KC_\nHELP',
        x: 16.5,
        y: 18,
        w: 1.25
      },
      {
        name: 'KC_\nUNDO',
        x: 17.75,
        y: 18,
        w: 1.25
      },
      {
        name: 'KC_\nCUT',
        x: 19,
        y: 18,
        w: 1.25
      },
      {
        name: 'KC_\nCOPY',
        x: 20.25,
        y: 18,
        w: 1.25
      },
      {
        name: 'KC_\nPASTE',
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
        name: 'KC_\nLABK',
        x: 9.25,
        y: 19
      },
      {
        name: 'KC_\nRABK',
        x: 10.25,
        y: 19
      },
      {
        name: 'KC_\nQUES',
        x: 11.25,
        y: 19
      },
      {
        x: 12.25,
        y: 19,
        w: 2.75
      },
      {
        name: 'KC_\nFIND',
        x: 16.5,
        y: 19,
        w: 1.25
      },
      {
        name: 'KC_\nSYSREQ',
        x: 17.75,
        y: 19,
        w: 1.25
      },
      {
        name: 'KC_\nCANCEL',
        x: 19,
        y: 19,
        w: 1.25
      },
      {
        name: 'KC_\nPWR',
        x: 20.25,
        y: 19,
        w: 1.25
      },
      {
        name: 'KC_\nSLEP',
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
        name: 'KC_\nCALC',
        x: 16.5,
        y: 20,
        w: 1.25
      },
      {
        name: 'KC_\nMYCM',
        x: 17.75,
        y: 20,
        w: 1.25
      },
      {
        name: 'KC_\nWAKE',
        x: 19,
        y: 20,
        w: 1.25
      },
      {
        name: 'KC_\nMAIL',
        x: 20.25,
        y: 20,
        w: 1.25
      },
      {
        title: 'Layer Switching - Momentary - Active When Held',
        fontSize: title2FontSize,
        x: 0,
        y: 21
      },
      {
        name: 'MO(0)',
        x: 0,
        y: 22
      },
      {
        name: 'MO(1)',
        x: 1,
        y: 22
      },
      {
        name: 'MO(2)',
        x: 2,
        y: 22
      },
      {
        name: 'MO(3)',
        x: 3,
        y: 22
      },
      {
        name: 'MO(4)',
        x: 4,
        y: 22
      },
      {
        name: 'MO(5)',
        x: 5,
        y: 22
      },
      {
        name: 'MO(6)',
        x: 6,
        y: 22
      },
      {
        name: 'MO(7)',
        x: 7,
        y: 22
      },
      {
        name: 'MO(8)',
        x: 8,
        y: 22
      },
      {
        name: 'MO(9)',
        x: 9,
        y: 22
      },
      {
        name: 'MO(10)',
        x: 10,
        y: 22
      },
      {
        name: 'MO(11)',
        x: 11,
        y: 22
      },
      {
        name: 'MO(12)',
        x: 12,
        y: 22
      },
      {
        name: 'MO(13)',
        x: 13,
        y: 22
      },
      {
        name: 'MO(14)',
        x: 14,
        y: 22
      },
      {
        name: 'MO(15)',
        x: 15,
        y: 22
      },
      {
        title: 'WWW Commands (OS Dependent)',
        fontSize: title2FontSize,
        x: 16.5,
        y: 21
      },
      {
        name: 'KC_\nWSCH',
        x: 16.5,
        y: 22,
        w: 1.25
      },
      {
        name: 'KC_\nWHOM',
        x: 17.75,
        y: 22,
        w: 1.25
      },
      {
        name: 'KC_\nWBAK',
        x: 19,
        y: 22,
        w: 1.25
      },
      {
        name: 'KC_\nWFWD',
        x: 20.25,
        y: 22,
        w: 1.25
      },
      {
        name: 'MO(16)',
        x: 0,
        y: 23
      },
      {
        name: 'MO(17)',
        x: 1,
        y: 23
      },
      {
        name: 'MO(18)',
        x: 2,
        y: 23
      },
      {
        name: 'MO(19)',
        x: 3,
        y: 23
      },
      {
        name: 'MO(20)',
        x: 4,
        y: 23
      },
      {
        name: 'MO(21)',
        x: 5,
        y: 23
      },
      {
        name: 'MO(22)',
        x: 6,
        y: 23
      },
      {
        name: 'MO(23)',
        x: 7,
        y: 23
      },
      {
        name: 'MO(24)',
        x: 8,
        y: 23
      },
      {
        name: 'MO(25)',
        x: 9,
        y: 23
      },
      {
        name: 'MO(26)',
        x: 10,
        y: 23
      },
      {
        name: 'MO(27)',
        x: 11,
        y: 23
      },
      {
        name: 'MO(28)',
        x: 12,
        y: 23
      },
      {
        name: 'MO(29)',
        x: 13,
        y: 23
      },
      {
        name: 'MO(30)',
        x: 14,
        y: 23
      },
      {
        name: 'MO(31)',
        x: 15,
        y: 23
      },
      {
        name: 'KC_\nWSTP',
        x: 16.5,
        y: 23,
        w: 1.25
      },
      {
        name: 'KC_\nWREF',
        x: 17.75,
        y: 23,
        w: 1.25
      },
      {
        name: 'KC_\nWFAV',
        x: 19,
        y: 23,
        w: 1.25
      },
      {
        name: 'TG(0)',
        x: 0,
        y: 25
      },
      {
        name: 'TG(1)',
        x: 1,
        y: 25
      },
      {
        name: 'TG(2)',
        x: 2,
        y: 25
      },
      {
        name: 'TG(3)',
        x: 3,
        y: 25
      },
      {
        name: 'TG(4)',
        x: 4,
        y: 25
      },
      {
        name: 'TG(5)',
        x: 5,
        y: 25
      },
      {
        name: 'TG(6)',
        x: 6,
        y: 25
      },
      {
        name: 'TG(7)',
        x: 7,
        y: 25
      },
      {
        name: 'TG(8)',
        x: 8,
        y: 25
      },
      {
        name: 'TG(9)',
        x: 9,
        y: 25
      },
      {
        name: 'TG(10)',
        x: 10,
        y: 25
      },
      {
        name: 'TG(11)',
        x: 11,
        y: 25
      },
      {
        name: 'TG(12)',
        x: 12,
        y: 25
      },
      {
        name: 'TG(13)',
        x: 13,
        y: 25
      },
      {
        name: 'TG(14)',
        x: 14,
        y: 25
      },
      {
        name: 'TG(15)',
        x: 15,
        y: 25
      },
      {
        name: 'BL_\nTOGG',
        x: 16.5,
        y: 25
      },
      {
        name: 'BL_\nSTEP',
        x: 17.5,
        y: 25
      },
      {
        name: 'BL_\nON',
        x: 18.5,
        y: 25
      },
      {
        name: 'BL_\nOFF',
        x: 19.5,
        y: 25
      },
      {
        name: 'BL_\nINC',
        x: 20.5,
        y: 25
      },
      {
        name: 'BL_\nDEC',
        x: 21.5,
        y: 25
      },
      {
        name: 'BL_\nBRTG',
        x: 22.5,
        y: 25
      },
      {
        name: 'TG(16)',
        x: 0,
        y: 26
      },
      {
        name: 'TG(17)',
        x: 1,
        y: 26
      },
      {
        name: 'TG(18)',
        x: 2,
        y: 26
      },
      {
        name: 'TG(19)',
        x: 3,
        y: 26
      },
      {
        name: 'TG(20)',
        x: 4,
        y: 26
      },
      {
        name: 'TG(21)',
        x: 5,
        y: 26
      },
      {
        name: 'TG(22)',
        x: 6,
        y: 26
      },
      {
        name: 'TG(23)',
        x: 7,
        y: 26
      },
      {
        name: 'TG(24)',
        x: 8,
        y: 26
      },
      {
        name: 'TG(25)',
        x: 9,
        y: 26
      },
      {
        name: 'TG(26)',
        x: 10,
        y: 26
      },
      {
        name: 'TG(27)',
        x: 11,
        y: 26
      },
      {
        name: 'TG(28)',
        x: 12,
        y: 26
      },
      {
        name: 'TG(29)',
        x: 13,
        y: 26
      },
      {
        name: 'TG(30)',
        x: 14,
        y: 26
      },
      {
        name: 'TG(31)',
        x: 15,
        y: 26
      },
      {
        name: 'RGB_\nTOG',
        x: 17.75,
        y: 27
      },
      {
        name: 'RGB_\nMOD',
        x: 18.75,
        y: 27
      },
      {
        name: 'RGB_\nRMOD',
        x: 19.75,
        y: 27
      },
      {
        name: 'OSL(0)',
        x: 0,
        y: 28
      },
      {
        name: 'OSL(1)',
        x: 1,
        y: 28
      },
      {
        name: 'OSL(2)',
        x: 2,
        y: 28
      },
      {
        name: 'OSL(3)',
        x: 3,
        y: 28
      },
      {
        name: 'OSL(4)',
        x: 4,
        y: 28
      },
      {
        name: 'OSL(5)',
        x: 5,
        y: 28
      },
      {
        name: 'OSL(6)',
        x: 6,
        y: 28
      },
      {
        name: 'OSL(7)',
        x: 7,
        y: 28
      },
      {
        name: 'OSL(8)',
        x: 8,
        y: 28
      },
      {
        name: 'OSL(9)',
        x: 9,
        y: 28
      },
      {
        name: 'OSL(10)',
        x: 10,
        y: 28
      },
      {
        name: 'OSL(11)',
        x: 11,
        y: 28
      },
      {
        name: 'OSL(12)',
        x: 12,
        y: 28
      },
      {
        name: 'OSL(13)',
        x: 13,
        y: 28
      },
      {
        name: 'OSL(14)',
        x: 14,
        y: 28
      },
      {
        name: 'OSL(15)',
        x: 15,
        y: 28
      },
      {
        name: 'RGB_\nHUI',
        x: 17.75,
        y: 28
      },
      {
        name: 'RGB_\nHUD',
        x: 18.75,
        y: 28
      },
      {
        name: 'RGB_\nSAI',
        x: 19.75,
        y: 28
      },
      {
        name: 'RGB_\nSAD',
        x: 20.75,
        y: 28
      },
      {
        name: 'RGB_\nVAI',
        x: 21.75,
        y: 28
      },
      {
        name: 'RGB_\nVAD',
        x: 22.75,
        y: 28
      },
      {
        name: 'OSL(16)',
        x: 0,
        y: 29
      },
      {
        name: 'OSL(17)',
        x: 1,
        y: 29
      },
      {
        name: 'OSL(18)',
        x: 2,
        y: 29
      },
      {
        name: 'OSL(19)',
        x: 3,
        y: 29
      },
      {
        name: 'OSL(20)',
        x: 4,
        y: 29
      },
      {
        name: 'OSL(21)',
        x: 5,
        y: 29
      },
      {
        name: 'OSL(22)',
        x: 6,
        y: 29
      },
      {
        name: 'OSL(23)',
        x: 7,
        y: 29
      },
      {
        name: 'OSL(24)',
        x: 8,
        y: 29
      },
      {
        name: 'OSL(25)',
        x: 9,
        y: 29
      },
      {
        name: 'OSL(26)',
        x: 10,
        y: 29
      },
      {
        name: 'OSL(27)',
        x: 11,
        y: 29
      },
      {
        name: 'OSL(28)',
        x: 12,
        y: 29
      },
      {
        name: 'OSL(29)',
        x: 13,
        y: 29
      },
      {
        name: 'OSL(30)',
        x: 14,
        y: 29
      },
      {
        name: 'OSL(31)',
        x: 15,
        y: 29
      },
      {
        name: 'RGB_\nM_P',
        x: 17.75,
        y: 29
      },
      {
        name: 'RGB_\nM_B',
        x: 18.75,
        y: 29
      },
      {
        name: 'RGB_\nM_R',
        x: 19.75,
        y: 29
      },
      {
        name: 'RGB_\nM_SW',
        x: 20.75,
        y: 29
      },
      {
        name: 'RGB_\nM_SN',
        x: 17.75,
        y: 30
      },
      {
        name: 'RGB_\nM_K',
        x: 18.75,
        y: 30
      },
      {
        name: 'RGB_\nM_X',
        x: 19.75,
        y: 30
      },
      {
        name: 'RGB_\nM_G',
        x: 20.75,
        y: 30
      },
      {
        name: 'LCTL(KC)',
        x: 0,
        y: 31,
        w: 1.25
      },
      {
        name: 'LSFT(KC)',
        x: 1.25,
        y: 31,
        w: 1.25
      },
      {
        name: 'LALT(KC)',
        x: 2.5,
        y: 31,
        w: 1.25
      },
      {
        name: 'LGUI(KC)',
        x: 3.75,
        y: 31,
        w: 1.25
      },
      {
        name: 'RCTL(KC)',
        x: 5,
        y: 31,
        w: 1.25
      },
      {
        name: 'RSFT(KC)',
        x: 6.25,
        y: 31,
        w: 1.25
      },
      {
        name: 'RALT(KC)',
        x: 7.5,
        y: 31,
        w: 1.25
      },
      {
        name: 'RGUI(KC)',
        x: 8.75,
        y: 31,
        w: 1.25
      },
      {
        name: 'HYPR(KC)',
        x: 10,
        y: 31,
        w: 1.25
      },
      {
        name: 'MEH(KC)',
        x: 11.25,
        y: 31,
        w: 1.25
      },
      {
        name: 'LCAG(KC)',
        x: 12.5,
        y: 31,
        w: 1.25
      },
      {
        name: 'ALTG(KC)',
        x: 13.75,
        y: 31,
        w: 1.25
      },
      {
        name: 'SGUI(KC)',
        x: 15,
        y: 31,
        w: 1.25
      },
      {
        name: 'LCA(KC)',
        x: 16.25,
        y: 31,
        w: 1.25
      },
      {
        name: 'LCTL_T(KC)',
        x: 0,
        y: 33,
        w: 1.5
      },
      {
        name: 'LSFT_T(KC)',
        x: 1.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'LALT_T(KC)',
        x: 3,
        y: 33,
        w: 1.5
      },
      {
        name: 'LGUI_T(KC)',
        x: 4.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'RCTL_T(KC)',
        x: 6,
        y: 33,
        w: 1.5
      },
      {
        name: 'RSFT_T(KC)',
        x: 7.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'RALT_T(KC)',
        x: 9,
        y: 33,
        w: 1.5
      },
      {
        name: 'RGUI_T(KC)',
        x: 10.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'ALL_T(KC)',
        x: 12,
        y: 33,
        w: 1.5
      },
      {
        name: 'MEH_T(KC)',
        x: 13.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'LCAG_T(KC)',
        x: 15,
        y: 33,
        w: 1.5
      },
      {
        name: 'SGUI_T(KC)',
        x: 16.5,
        y: 33,
        w: 1.5
      },
      {
        name: 'LCA_T(KC)',
        x: 18,
        y: 33,
        w: 1.5
      },
      {
        name: 'KC_\nMS_U',
        x: 1,
        y: 35.5
      },
      {
        name: 'KC_\nACL2',
        x: 8,
        y: 35.5
      },
      {
        name: 'KC_\nWH_U',
        x: 11,
        y: 35.5
      },
      {
        name: 'KC_\nBTN1',
        x: 3.75,
        y: 36
      },
      {
        name: 'KC_\nBTN3',
        x: 4.75,
        y: 36
      },
      {
        name: 'KC_\nBTN2',
        x: 5.75,
        y: 36
      },
      {
        name: 'KC_\nMS_L',
        x: 0,
        y: 36.5
      },
      {
        name: 'KC_\nMS_R',
        x: 2,
        y: 36.5
      },
      {
        name: 'KC_\nACL1',
        x: 8,
        y: 36.5
      },
      {
        name: 'KC_\nWH_L',
        x: 10,
        y: 36.5
      },
      {
        name: 'KC_\nWH_R',
        x: 12,
        y: 36.5
      },
      {
        name: 'KC_\nBTN4',
        x: 4.25,
        y: 37
      },
      {
        name: 'KC_\nBTN5',
        x: 5.25,
        y: 37
      },
      {
        name: 'KC_\nMS_D',
        x: 1,
        y: 37.5
      },
      {
        name: 'KC_\nACL0',
        x: 8,
        y: 37.5
      },
      {
        name: 'KC_\nWH_D',
        x: 11,
        y: 37.5
      },
      {
        name: 'MAGIC_\nSWAP_CONTROL_CAPSLOCK',
        x: 0,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_CONTROL_CAPSLOCK',
        x: 3.75,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nCAPSLOCK_TO_CONTROL',
        x: 7.5,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNCAPSLOCK_TO_CONTROL',
        x: 11.25,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nSWAP_BACKSLASH_BACKSPACE',
        x: 15,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_BACKSLASH_BACKSPACE',
        x: 18.75,
        y: 39.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nSWAP_LALT_LGUI',
        x: 0,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_LALT_LGUI',
        x: 3.75,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nSWAP_RALT_RGUI',
        x: 7.5,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_RALT_RGUI',
        x: 11.25,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nSWAP_ALT_GUI',
        x: 15,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_ALT_GUI',
        x: 18.75,
        y: 40.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nNO_GUI',
        x: 0,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNNO_GUI',
        x: 3.75,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nSWAP_GRAVE_ESC',
        x: 7.5,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNSWAP_GRAVE_ESC',
        x: 11.25,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nHOST_NKRO',
        x: 15,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nUNHOST_NKRO',
        x: 18.75,
        y: 41.5,
        w: 3.75
      },
      {
        name: 'MAGIC_\nTOGGLE_NKRO',
        x: 0,
        y: 42.5,
        w: 3.75
      }
    ];
  }
});
