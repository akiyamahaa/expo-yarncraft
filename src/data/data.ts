import { images } from '@/constants'
import { ImageSourcePropType } from 'react-native'

export interface IData {
  title: string
  image: ImageSourcePropType
  youtubeId?: string
  instructions: Array<{
    title: string
    image?: ImageSourcePropType
    content: Array<{
      formula: string
      stitch: number
    }>
    last: string
  }>
}

export const formulaData: IData[] = [
  {
    title: 'A Duck | Silva Crochet',
    image: images.vit0,
    youtubeId: 'U470YuZVmb4',
    instructions: [
      {
        title: 'Body',
        image: images.vit1,
        content: [
          {
            formula: '8 sc in Mr/Mc',
            stitch: 8,
          },
          {
            formula: 'inc 8',
            stitch: 16,
          },
          {
            formula: '(sc, inc) 8',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'inc 1, sc 22, inc 1',
            stitch: 26,
          },
          {
            formula: 'sc 10, dec 1, sc 2, dec 1, sc 10',
            stitch: 26,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
        ],
        last: 'Leave a long tail and sew it (Image below) leaving 10 sts for the head.',
      },
      {
        title: 'Head',
        image: images.vit2,
        content: [
          {
            formula: 'sc 7 in Mr/Mc',
            stitch: 7,
          },
          {
            formula: 'inc 7',
            stitch: 14,
          },
          {
            formula: 'sc all around',
            stitch: 14,
          },
          {
            formula: 'sc all around',
            stitch: 14,
          },
          {
            formula: '(sc, dec) 4, sc 2',
            stitch: 10,
          },
        ],
        last: 'Leave long tail for sewing.',
      },
      {
        title: 'Wing',
        content: [
          {
            formula: 'sc 5 in Mr/Mc',
            stitch: 5,
          },
          {
            formula: 'inc 1, sc 1, (sc, hdc, ch, slst, sc) in one stitch, sc 1, inc 1',
            stitch: 10,
          },
        ],
        last: 'Leave enough tail for sewing',
      },
      {
        title: 'Beak',
        image: images.vit3,
        content: [
          {
            formula: 'sl 2',
            stitch: 2,
          },
          {
            formula: '(sc, hdc) in 1 stitch, sc 1',
            stitch: 3,
          },
        ],
        last: 'Put eyes on 2 adjacent stitch',
      },
    ],
  },
  {
    title: 'A Cat Beanie',
    image: images.vit0,
    youtubeId: 's8uaBqUjZr4',
    instructions: [
      {
        title: 'Base with measurement',
        image: images.vit1,
        content: [
          {
            formula: '8 sc in Mr/Mc',
            stitch: 8,
          },
          {
            formula: 'inc 16',
            stitch: 16,
          },
          {
            formula: '(sc, inc) 8',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'inc, sc 22, inc',
            stitch: 26,
          },
          {
            formula: 'sc 10x, dec, sc 2x, dec, sc 10x',
            stitch: 26,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
        ],
        last: 'Leave a long tail and sew it (Image below) leaving 10 sts for the head.',
      },

      {
        title: 'Connect the ends',
        image: images.vit3,
        content: [
          {
            formula: 'sl',
            stitch: 4,
          },
        ],
        last: 'Put eyes on 2 adjacent stitch',
      },
    ],
  },
  {
    title: "Whale | Luoie's Loops",
    image: images.whale0,
    youtubeId: 'docJoiUy-9E',
    instructions: [
      {
        title: 'Fins',
        image: images.whale1,
        content: [
          {
            formula: 'Chain 4',
            stitch: 4,
          },
          {
            formula: 'Skip the first ch, sc 1, hdc 1, dc 1',
            stitch: 3,
          },
        ],
        last: 'Ch 1, cut the yarn leaving enough tail end to sew onto the body and pull through.',
      },

      {
        title: 'Tail',
        image: images.whale2,
        content: [
          {
            formula: 'Chain 6',
            stitch: 6,
          },
          {
            formula: 'Skip the first ch, sc 1, hdc 1, dc 1, hdc 1, slst 1',
            stitch: 5,
          },
          {
            formula:
              'Ch 5, skip the first ch, sc 1, hdc 1, dc 1, hdc 1, slst into same st as Row 1',
            stitch: 5,
          },
        ],
        last: 'Ch 1, cut the yarn leaving enough tail end to sew onto the body and pull through.',
      },
      {
        title: 'Body',
        image: images.whale3,
        content: [
          {
            formula: 'sc 6 into the magic loop',
            stitch: 6,
          },
          {
            formula: 'inc 6',
            stitch: 12,
          },
          {
            formula: '[sc 1, inc 1] 6',
            stitch: 18,
          },
          {
            formula: '[sc 5, inc 1] 3',
            stitch: 21,
          },
          {
            formula: 'sc all around',
            stitch: 21,
          },
          {
            formula: 'sc 2, inc 1, sc 18',
            stitch: 22,
          },
          {
            formula: 'sc 2, inc 1, sc 1, inc 1, sc 17',
            stitch: 24,
          },
          {
            formula: '(change colour) sc 2, invdec 1, sc 1, invdec 1, sc 17',
            stitch: 22,
          },
          {
            formula:
              '[sc 2, invdec 1] 2, [sc 5, invdec 1] 2. Attach Fins and Tail. Add eyes into Rnd 6, sts 12 and 17.',
            stitch: 18,
          },
          {
            formula: ' [sc 1, invdec 1] 6. Stuff cotton',
            stitch: 12,
          },
          {
            formula: 'invdec all around',
            stitch: 6,
          },
        ],
        last: 'Stuff fully. Cut the yarn, pull through, and sew closed.',
      },
    ],
  },
  {
    title: 'Cookie friend',
    image: images.cookie0,
    youtubeId: '',
    instructions: [
      {
        title: 'Limb (x4)',
        image: images.cookie1,
        content: [
          {
            formula: 'Chain 9',
            stitch: 9,
          },
          {
            formula: 'Skip the first ch, sl 8',
            stitch: 8,
          },
        ],
        last: 'Done 4 times, 2 for legs and 2 for arms',
      },
      {
        title: 'Glove (x4)',
        image: images.cookie2,
        content: [
          {
            formula: '6sc into magic loop',
            stitch: 6,
          },
          {
            formula: '(sc 1, inc 1) 3',
            stitch: 9,
          },
          {
            formula: '(sc 1, dec 1) 3',
            stitch: 6,
          },
        ],
        last: 'Done 4 times, 2 for hands and 2 for feet. Glued to one end of the limbs.',
      },
      {
        title: 'Body (x3)',
        image: images.cookie3,
        content: [
          {
            formula: 'sc 8 into the magic loop',
            stitch: 4,
          },
          {
            formula: 'inc 8',
            stitch: 16,
          },
          {
            formula: '(sc 1, inc 1) 8',
            stitch: 24,
          },
          {
            formula: '(sc 1, inc 1, sc 1) 8',
            stitch: 32,
          },
          {
            formula: '(sl 1, hdc 3 in 1 stitch) 16',
            stitch: 32,
          },
        ],
        last: 'Done 3 times, 2 black for the sides and 1 white for the creame filling. Glue the remmaining end of the limbs onto the sides of the body',
      },
      {
        title: 'eye (x2)',
        image: images.cookie4,
        content: [
          {
            formula: '5sc into magic loop',
            stitch: 5,
          },
          {
            formula: 'inc 5',
            stitch: 10,
          },
        ],
        last: 'Glued onto 1 side. Could add a X stictch similar to the model',
      },
      {
        title: 'nose',
        image: images.cookie4,
        content: [
          {
            formula: '6sc into magic loop',
            stitch: 6,
          },
        ],
        last: 'Glued below and inbetween 2 eyes',
      },
    ],
  },
  {
    title: 'Alpaca',
    image: images.alpaca0,
    youtubeId: '',
    instructions: [
      {
        title: 'Neck to Body',
        image: images.alpaca1,
        content: [
          {
            formula: 'sc 6 into the magic loop',
            stitch: 6,
          },
          {
            formula: 'inc 6',
            stitch: 12,
          },
          {
            formula: '(sc 1, inc 1) 6',
            stitch: 18,
          },
          {
            formula: '(sc 1, inc 1, sc 1) 6',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: 'sc all around',
            stitch: 24,
          },
          {
            formula: '(sc 1, dec 1, sc 1) 6',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around',
            stitch: 18,
          },
          {
            formula: 'sc all around, stuff cotton',
            stitch: 18,
          },
          {
            formula:
              'ch 8, return and skip 1 stich, inc 1, sc 30, inc 1 (connect the new chain and the existing body)',
            stitch: 34,
          },
          {
            formula: 'inc 2, sc 30, inc 2',
            stitch: 38,
          },
          {
            formula: '(sc 1, inc 1) 2, sc 30, (sc 1, inc 1) 2',
            stitch: 42,
          },
          {
            formula: '(sc 2, inc 1) 2, sc 30, (sc 2, inc 1) 2',
            stitch: 46,
          },
          {
            formula: 'sc all around',
            stitch: 46,
          },
          {
            formula: 'sc all around',
            stitch: 46,
          },
          {
            formula: 'sc all around',
            stitch: 46,
          },
          {
            formula: 'sc all around',
            stitch: 46,
          },
          {
            formula: 'sc all around',
            stitch: 46,
          },
          {
            formula: 'sc 1, (sc 5, dec) 3, sc 2, (sc 5, dec) 3, sc 1',
            stitch: 40,
          },
          {
            formula: 'sc 2, (ch 4, skip 6 sticthes, sc 6, ch 4, skip 6 stitches) 2',
            stitch: 32,
          },
          {
            formula: 'dec 2, sc 1, SC3TOG, (sc 2, dec 2) 2, sc 1, SC3TOG, sc 2, dec 2, sc 2.',
            stitch: 20,
          },
          {
            formula: 'dec 10, stuff cotton',
            stitch: 5,
          },
          {
            formula: 'dec 5',
            stitch: 2,
          },
        ],
        last: 'Ch 1, cut the yarn and pull through.',
      },
      {
        title: 'legs (x4)',
        image: images.alpaca2,
        content: [
          {
            formula: 'sc 10 on the the skipped chains of round 32 and 33 on the body, ',
            stitch: 10,
          },
          {
            formula: 'sc 10',
            stitch: 10,
          },
          {
            formula: 'dec 5',
            stitch: 5,
          },
        ],
        last: 'Ch 1, cut the yarn and pull through. Done 4 times.',
      },
      {
        title: 'ears and tails (x3)',
        image: images.alpaca3,
        content: [
          {
            formula: 'chain 4',
            stitch: 6,
          },
          {
            formula: 'return, skip 1, dc 2, sc 1',
            stitch: 6,
          },
        ],
        last: 'Chain 1, cut the yarn leaving enough tail end to sew onto the body. Done 3 times, 2 for ears and 1 for tail',
      },
      {
        title: 'nose',
        image: images.alpaca4,
        content: [
          {
            formula: 'sc 6 into magic loop',
            stitch: 6,
          },
          {
            formula: '(sc 2, inc 1) 2',
            stitch: 6,
          },
        ],
        last: 'Chain 1, cut the yarn leaving enough tail end to sew or glue onto the body. Add a few stiches to outline the mouth as referenced. Glue 2 eyes on the sides of the nose.',
      },
    ],
  },
  {
    title: 'Capybara Purin',
    image: images.capypurin0,
    youtubeId: '',
    instructions: [
      {
        title: 'Head',
        image: images.capypurin1,
        content: [
          {
            formula: 'sc 6 into the magic loop',
            stitch: 6,
          },
          {
            formula: 'inc 6',
            stitch: 12,
          },
          {
            formula: '(sc 1, inc 1) 6',
            stitch: 18,
          },
          {
            formula: '(sc 1, inc 1, sc 1) 6',
            stitch: 24,
          },
          {
            formula: '(sc 3, inc 1) 6',
            stitch: 30,
          },
          {
            formula: '(sc 2, inc 1, sc 2) 6',
            stitch: 36,
          },
          {
            formula: '(sc 5, inc 1) 6',
            stitch: 42,
          },
          {
            formula: 'sc all around',
            stitch: 42,
          },
          {
            formula: 'sc all around',
            stitch: 42,
          },
          {
            formula: 'sc all around',
            stitch: 42,
          },
          {
            formula: 'sc all around',
            stitch: 42,
          },
          {
            formula: 'sc 13, inc 5, sc 6, inc 5, sc 13',
            stitch: 52,
          },
          {
            formula: 'sc all around',
            stitch: 52,
          },
          {
            formula: 'sc all around',
            stitch: 52,
          },
          {
            formula: 'sc all around',
            stitch: 52,
          },
          {
            formula: 'sc all around',
            stitch: 52,
          },
          {
            formula: 'sc all around',
            stitch: 52,
          },
          {
            formula: 'sc 13, dec 5, sc 6, dec 5, sc 13',
            stitch: 42,
          },
          {
            formula: '(sc 5, dec 1) 6',
            stitch: 32,
          },
          {
            formula: '(sc 2, dec 1, sc 2) 6',
            stitch: 30,
          },
          {
            formula: '(sc 3, dec 1) 6',
            stitch: 24,
          },
          {
            formula: 'dec 12',
            stitch: 12,
          },
          {
            formula: 'dec 6',
            stitch: 6,
          },
        ],
        last: 'Sew through all loops and chain. Hide the yarn',
      },
      {
        title: 'arms (x3)',
        image: images.capypurin0,
        content: [
          {
            formula: 'sc 6 in magic loop',
            stitch: 6,
          },
          {
            formula: 'inc 6',
            stitch: 12,
          },
          {
            formula: 'sc all around',
            stitch: 12,
          },
          {
            formula: 'sc all around',
            stitch: 12,
          },
          {
            formula: 'sc all around',
            stitch: 12,
          },
        ],
        last: 'Ch 1, cut the yarn and pull through. Done 2 times. Sew or glue onto the body.',
      },
      {
        title: 'leg (x2)',
        image: images.capypurin2,
        content: [
          {
            formula: 'sc 6 in magic loop',
            stitch: 6,
          },
          {
            formula: 'inc 6',
            stitch: 12,
          },
          {
            formula: '(sc 1, inc 1) 6',
            stitch: 18,
          },
          {
            formula: 'sc all aoround',
            stitch: 18,
          },
          {
            formula: 'sc all aoround',
            stitch: 18,
          },
          {
            formula: 'sc all aoround',
            stitch: 18,
          },
        ],
        last: 'sew 2 pair of opposite stitches of the legs together as referenced',
      },
      {
        title: 'body',
        image: images.capypurin3,
        content: [
          {
            formula:
              'start at one leg, connect 2 legs together: sc 16 (of 1st leg), sc 16 (of 2md leg)',
            stitch: 32,
          },
          {
            formula: 'sc 32',
            stitch: 32,
          },
          {
            formula: 'sc 8, inc 1, sc 14, inc 1, sc 8',
            stitch: 34,
          },
          {
            formula: 'sc 10, inc 1, sc 12, inc 1, sc 10',
            stitch: 36,
          },
          {
            formula: 'sc all around',
            stitch: 36,
          },
          {
            formula: 'sc all around',
            stitch: 36,
          },
          {
            formula: 'sc all around',
            stitch: 36,
          },
          {
            formula: 'sc 10, dec 1, sc 12, dec 1, sc 10',
            stitch: 34,
          },
          {
            formula: 'sc 5, dec 1, sc 9, dec 1, sc 9, dec 1, sc 5',
            stitch: 31,
          },
          {
            formula: 'sc 8, dec 1, sc 9, dec 1, sc 9, dec 1',
            stitch: 28,
          },
        ],
        last: 'sew 2 pair of opposite stitches of the legs together as referenced',
      },

      {
        title: 'nose',
        image: images.capypurin4,
        content: [
          {
            formula: 'ch 4',
            stitch: 4,
          },
          {
            formula: 'sc 2, sc 3 in the same stich, sc 1, inc 1',
            stitch: 6,
          },
        ],
        last: 'Chain 1, cut the yarn leaving enough tail end to sew or glue onto the body. Add a few stiches to outline the mouth as referenced. Glue 2 eyes on the sides of the nose.',
      },
    ],
  },
]

export const toolData = [
  {
    title: 'Kéo',
    imageSource: images.keo,
  },
  {
    title: 'Kim đan',
    imageSource: images.kimdan,
  },
  {
    title: 'Kim nhọn',
    imageSource: images.kimnhon,
  },
  {
    title: 'Hạt trang trí',
    imageSource: images.hat,
  },
  {
    title: 'Thước đo',
    imageSource: images.thuocdo,
  },
  {
    title: 'Móc khóa',
    imageSource: images.mockhoa,
  },
  {
    title: 'Dụng cụ dập lỗ',
    imageSource: images.dap,
  },
]

export interface IPostData {
  id: number
  image: ImageSourcePropType
  title: string
  description: string
  content: Array<{
    title: string
    body: string[]
    image?: string
  }>
}

export const postData: IPostData[] = [
  {
    id: 1,
    title: 'Khám Phá Cách Sửa Lỗi Móc Len Bị Rối',
    image: images.goroi,
    description: 'Mẹo và giải pháp khắc phục khi sợi len bị rối trong quá trình móc.',
    content: [
      {
        title: '1. Nguyên nhân gây rối len',
        body: [
          'Len bị rối có thể do nhiều nguyên nhân:',
          '• Sợi len quá căng hoặc quá lỏng: Điều này thường xảy ra khi bạn không kiểm soát tốt cách kéo len từ cuộn, làm len bị rối.',
          '• Cuộn len không được quấn gọn gàng: Khi bắt đầu móc, nếu len từ cuộn không được rút ra một cách trơn tru, sẽ dễ dẫn đến tình trạng rối.',
          '• Len bị chặn bởi các mảnh len nhỏ hoặc bụi: Đôi khi có các mảnh nhỏ từ len cũ còn sót lại gây tắc nghẽn, làm sợi len khó di chuyển.',
        ],
      },
      {
        title: '2. Cách sửa lỗi len bị rối',
        body: [
          '• Kiểm tra nguồn gốc rối: Khi gặp len bị rối, việc đầu tiên bạn nên làm là kiểm tra nguồn gốc của vấn đề. Len có thể bị mắc kẹt trong cuộn hoặc bị thắt nút ở giữa sợi.',
          '• Gỡ len từ từ: Không nên vội vã kéo mạnh len khi gặp rối, vì điều này sẽ làm thắt nút chặt hơn. Hãy dùng tay nhẹ nhàng kéo len ra từng chút một, hoặc dùng một chiếc kim móc mũi nhỏ để từ từ gỡ các đoạn rối.',
          '• Sử dụng kĩ thuật quấn cuộn len bằng tay: Nếu len thường xuyên bị rối khi bạn móc, hãy thử quấn lại len bằng tay để sợi len không bị căng quá mức. Điều này sẽ giúp bạn kiểm soát tốt hơn khi sử dụng len trong quá trình móc.',
          '• Làm mềm và làm sạch len: Đôi khi len bị rối do khô cứng hoặc bị dính các hạt bụi nhỏ. Bạn có thể nhẹ nhàng giũ hoặc làm mềm len bằng tay trước khi móc để tránh tình trạng này.',
        ],
      },
      {
        title: '3. Phòng tránh rối len trong tương lai',
        body: [
          '• Sử dụng dụng cụ giữ cuộn len: Các dụng cụ giữ cuộn len (yarn bowl) giúp len di chuyển một cách tự nhiên mà không bị vướng hoặc rối. Bạn có thể dễ dàng rút len từ cuộn mà không lo len bị rối ở giữa chừng.',
          '• Quấn len cẩn thận khi không sử dụng: Khi bạn tạm ngừng dự án, hãy luôn chắc chắn rằng bạn quấn len gọn gàng để không bị rối khi sử dụng lại.',
          '• Giữ tay sạch sẽ và khô ráo: Đôi khi tay ẩm hoặc dính bụi cũng có thể làm len bị dính, khiến sợi len không di chuyển mượt mà.',
        ],
      },
      {
        title: '4. Các công cụ hỗ trợ',
        body: [
          'Ngoài việc sử dụng kim móc len, bạn cũng có thể thử các công cụ sau để hỗ trợ quá trình sửa lỗi len bị rối:',
          '• Kim đan hoặc kim khâu mũi nhỏ: Giúp dễ dàng gỡ các nút thắt mà không làm hỏng sợi len.',
          '• Dao cắt chỉ hoặc kéo nhỏ: Nếu không thể gỡ được phần len bị rối, hãy cắt bỏ một phần nhỏ sợi len để giữ dự án sạch sẽ và dễ dàng tiếp tục.',
        ],
      },
      {
        title: '5. Kiên nhẫn là chìa khóa',
        body: [
          'Cuối cùng, sửa lỗi len bị rối đòi hỏi rất nhiều sự kiên nhẫn. Hãy dành thời gian để xử lý vấn đề một cách chậm rãi và cẩn thận, bạn sẽ thấy vấn đề được giải quyết mà không cần phá hỏng công sức đã bỏ ra.',
        ],
      },
    ],
  },
  {
    id: 2,
    image: images.meodanmoc,
    title: 'Mẹo Đan Móc Len Cho Người Mới Bắt Đầu',
    description:
      'Một số mẹo hữu ích giúp bạn học đan móc len dễ dàng hơn, đặc biệt đối với những người mới bắt đầu.',
    content: [
      {
        title: 'Chọn đúng loại len và kim móc',
        body: [
          'Len: Chọn loại len có kích thước trung bình, mềm mại và dễ thao tác. Tránh những loại len quá mảnh hoặc quá to vì chúng sẽ làm khó điều khiển hơn.',
          'Kim móc: Đối với người mới bắt đầu, kim móc kích thước lớn (khoảng 5mm – 6mm) sẽ giúp bạn dễ thao tác hơn và nhìn rõ từng mũi đan.',
        ],
      },
      {
        title: 'Học cách giữ kim và len đúng cách',
        body: [
          'Giữ kim móc: Giữ như cách bạn cầm bút hoặc nắm đũa.',
          'Kiểm soát len: Dùng tay trái hoặc tay phải (tuỳ theo tay thuận của bạn) để điều khiển độ căng của len khi móc.',
        ],
      },
      {
        title: 'Bắt đầu với những mẫu đơn giản',
        body: [
          'Hãy bắt đầu với những mẫu cơ bản như chuỗi móc đơn, móc kép và các mũi móc cơ bản khác. Điều này sẽ giúp bạn nắm vững kỹ thuật và quen dần với việc móc len.',
        ],
      },
      {
        title: 'Kiên nhẫn với lỗi sai',
        body: [
          'Việc mắc lỗi là chuyện rất bình thường khi học đan móc len. Hãy kiên nhẫn và sửa lỗi từng bước. Bạn có thể dùng một kim đan nhỏ hoặc một cây kim móc khác để dễ dàng gỡ các mũi len.',
        ],
      },
      {
        title: 'Đo độ căng của len',
        body: [
          'Khi đan móc, việc giữ độ căng ổn định cho sợi len là rất quan trọng. Nếu len quá lỏng, mũi móc sẽ bị thưa và không đều. Ngược lại, nếu len quá căng, sản phẩm có thể bị biến dạng.',
        ],
      },
      {
        title: 'Thực hành thường xuyên',
        body: [
          'Bạn càng thực hành nhiều, tay của bạn sẽ càng linh hoạt và quen với việc móc len. Dành mỗi ngày một chút thời gian để luyện tập sẽ giúp bạn tiến bộ nhanh chóng.',
        ],
      },
      {
        title: 'Sử dụng video hướng dẫn',
        body: [
          'Có rất nhiều video hướng dẫn trực tuyến về đan móc len. Nếu gặp khó khăn trong việc hiểu các hướng dẫn bằng chữ, hãy thử tìm kiếm các video để dễ dàng hơn.',
        ],
      },
      {
        title: 'Giữ tư thế thoải mái khi đan móc',
        body: [
          'Đan móc trong thời gian dài có thể khiến bạn mỏi cổ tay, vai, và lưng. Hãy chú ý đến tư thế ngồi và nghỉ ngơi thường xuyên để tránh căng thẳng cơ.',
        ],
      },
      {
        title: 'Đừng quên thắt nút khi hoàn thành',
        body: [
          'Khi bạn đã hoàn thành sản phẩm, đừng quên thắt nút cuối cùng để bảo đảm mũi móc không bị tuột ra và giấu sợi len thừa một cách tinh tế.',
        ],
      },
      {
        title: 'Tham gia cộng đồng đan móc',
        body: [
          'Tham gia các nhóm hoặc diễn đàn đan móc sẽ giúp bạn học hỏi nhiều mẹo hay từ người có kinh nghiệm hơn và chia sẻ thành quả của mình.',
        ],
      },
    ],
  },
  {
    id: 3,
    image: images.biquyet,
    title: 'Bí Quyết Tăng Tốc Độ Đan Móc Len',
    description:
      'Một số mẹo giúp bạn cải thiện tốc độ đan móc len mà vẫn giữ được chất lượng sản phẩm.',
    content: [
      {
        title: 'Chọn đúng dụng cụ phù hợp',
        body: [
          'Sử dụng kim móc với kích thước và chất liệu phù hợp: Kim móc bằng kim loại thường giúp bạn di chuyển len nhanh hơn so với kim móc bằng nhựa hoặc gỗ.',
          'Chọn loại len mềm mượt: Loại len có độ mềm mượt sẽ di chuyển qua các mũi móc dễ dàng hơn, giúp tăng tốc độ đan móc của bạn.',
        ],
      },
      {
        title: 'Tập trung vào một mẫu móc',
        body: [
          'Nếu bạn muốn tăng tốc độ, hãy chọn một mẫu móc đơn giản mà bạn đã quen thuộc. Việc lặp lại các mũi móc quen thuộc giúp bạn không phải suy nghĩ quá nhiều trong quá trình làm việc.',
        ],
      },
      {
        title: 'Đan móc với nhịp độ ổn định',
        body: [
          'Giữ nhịp độ ổn định khi móc giúp bạn đạt được hiệu quả cao hơn. Đừng cố gắng móc quá nhanh ngay từ đầu, hãy tăng dần tốc độ theo thời gian khi bạn cảm thấy quen tay.',
        ],
      },
      {
        title: 'Sử dụng kim móc phù hợp với tay thuận',
        body: [
          'Hãy sử dụng kim móc phù hợp với tay thuận của bạn (tay trái hoặc tay phải) để có thể điều khiển dễ dàng hơn và đạt tốc độ cao hơn.',
        ],
      },
      {
        title: 'Luyện tập kỹ thuật giữ len',
        body: [
          'Việc giữ len một cách chính xác sẽ giúp bạn di chuyển len mượt mà hơn và tránh bị rối. Hãy luyện tập cách kiểm soát độ căng của sợi len để móc đều tay và nhanh chóng hơn.',
        ],
      },
      {
        title: 'Tạo không gian làm việc thuận tiện',
        body: [
          'Sắp xếp một không gian làm việc thoải mái và gọn gàng sẽ giúp bạn dễ dàng tập trung và giữ được tốc độ móc. Đảm bảo không gian có đủ ánh sáng và không bị gián đoạn.',
        ],
      },
      {
        title: 'Thực hiện các động tác tay nhẹ nhàng',
        body: [
          'Không cần thiết phải dùng lực quá mạnh khi móc, hãy giữ tay và cổ tay thoải mái để có thể móc liên tục mà không bị mỏi tay. Điều này sẽ giúp bạn tăng tốc độ mà vẫn giữ được sự chính xác.',
        ],
      },
      {
        title: 'Chọn những dự án nhỏ và ngắn hạn',
        body: [
          'Nếu bạn muốn tăng tốc độ móc, hãy bắt đầu với các dự án nhỏ như khăn quàng cổ, móc trang trí hoặc các vật dụng đơn giản để luyện tập và cải thiện dần tốc độ.',
        ],
      },
      {
        title: 'Nghỉ ngơi đúng cách',
        body: [
          'Dù mục tiêu là tăng tốc độ móc, bạn cũng cần dành thời gian nghỉ ngơi để tránh căng thẳng cơ và giảm nguy cơ đau mỏi tay. Nghỉ ngơi đúng cách giúp duy trì hiệu suất làm việc lâu dài.',
        ],
      },
      {
        title: 'Đừng so sánh bản thân với người khác',
        body: [
          'Mỗi người có tốc độ đan móc riêng, vì vậy đừng quá lo lắng nếu bạn chưa đạt được tốc độ như mong muốn. Điều quan trọng là luyện tập đều đặn và kiên nhẫn với bản thân.',
        ],
      },
    ],
  },
]
