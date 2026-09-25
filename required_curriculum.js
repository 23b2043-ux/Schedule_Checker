// 必修科目カリキュラム定義
// 学年・学期ごとの必修科目データ

const CURRICULUM = {
  '1_1': [
    { code: 'B31L03A1', name: 'プログラミング基礎(メ)', period: 3, day: 'mon', type: 'required' },
    { code: 'B31L02A1', name: 'データサイエンス入門1(メ)', period: 1, day: 'tue', type: 'required' },
    { code: 'B31L01A1', name: 'コンピューターシステム入門1(メ)', period: 2, day: 'tue', type: 'required' },
    { code: 'B31L04A1', name: 'プログラミングのための基礎数学', period: 3, day: 'tue', type: 'required' },
    { code: 'B31N01A1', name: '確率統計リテラシー1(メ)', period: 4, day: 'tue', type: 'required' },
    { code: 'B30D01A1', name: '修学基礎', period: 1, day: 'wed', type: 'required' },
    { code: 'B31M01A1', name: '情報学実習A', periods: [3, 4], day: 'fri', type: 'required' }
  ],
  '1_2': [
    { code: 'B31L07K1', name: 'プログラミング実習', periods: [1, 2], day: 'tue', type: 'required' },
    { code: 'B31L05K1', name: 'データサイエンス入門2(メ)', period: 3, day: 'wed', type: 'required' },
    { code: 'B31L06K1', name: 'データサイエンスのためのプログラミング基礎(メ)', period: 4, day: 'wed', type: 'required' },
    { code: 'B31M02A1', name: '情報学実習B', periods: [3, 4], day: 'fri', type: 'required' }
  ],
  '2_1': [
    { code: 'DS201', name: 'データサイエンス基礎', period: 1, day: 'mon', type: 'required' },
    { code: 'CHEM201', name: '応用化学', period: 1, day: 'wed', type: 'elective' },
    { code: 'CS210', name: 'プログラミング演習', period: 2, day: 'tue', type: 'required' },
    { code: 'CS220', name: 'データベース', period: 2, day: 'thu', type: 'elective-required' },
    { code: 'STAT201', name: '統計学I', period: 3, day: 'mon', type: 'required' },
    { code: 'ENG201', name: '機械工学基礎', period: 3, day: 'fri', type: 'elective' },
    { code: 'BUS101', name: '経営学入門', period: 4, day: 'wed', type: 'other' }
  ],
  '2_2': [
    { code: 'B31L09K2', name: '情報倫理(メ)', period: 1, day: 'mon', type: 'required' },
    { code: 'B30B02A2', name: '共通基盤ワークショップ2B', periods: [3, 4], day: 'mon', type: 'required' }
  ],
  '3_1': [
    { code: 'Dummy', name: '未設定', period: 1, day: 'mon', type: 'required' },
  ],
  '3_2': [
    { code: 'B30D03K3', name: '進路研究', period: 1, day: 'wed', type: 'required' }

  ],
  '4_1': [
    { code: 'THESIS401', name: '卒業研究A', period: 1, day: 'mon', type: 'required' }
  ],
  '4_2': [
    { code: 'B31M08Z4', name: '卒業研究B', period: 1, day: 'mon', type: 'required' }
  ]
};
