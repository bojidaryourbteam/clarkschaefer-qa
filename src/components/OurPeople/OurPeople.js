import Link from 'next/link';
import Image from 'next/image';
import { PropTypes } from 'prop-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import classNames from 'classnames';
import Icon from '@components/Icon';
import Button from '@components/Button/Button';

import {
  our_people_wrapper,
  our_people_part_one,
  our_people_part_one_list,
  our_people_part_two,
  our_people_part_two_left,
  btn_wrapper,
  our_people_part_two_right,
  expert_img,
  expert_img_wrapper,
  expert_info,
  explore_btn,
  content_left,
  content_right,
  content_center,
} from './OurPeople.module.scss';

const contentAligmentOptions = {
  left: content_left,
  right: content_right,
  center: content_center,
};

const OurPeople = (props) => {
  const clearDefaultParagraph = (html) => ({
    __html: documentToHtmlString(html).replace(/<\/?p>/g, ''),
  });

  const partOne = props?.referencesCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 1'
  );

  const partTwo = props?.referencesCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 2'
  );

  const cardListPartOne = partOne?.blocksCollection?.items.filter(
    (item) => item.internalTitle === 'Our People Part 1 Card'
  );

  const partOneContent = partOne?.blocksCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 1 Content'
  );

  const richTextHeadingPartOneContentText = partOneContent?.content?.json;
  const richTextHeadingPartOneAlignment = partOneContent?.textAlign;

  const richTextHeadingPartOneToHTML = clearDefaultParagraph(
    richTextHeadingPartOneContentText
  );

  const partTwoContentOne = partTwo?.referencesCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 2 Content 1'
  );

  const partTwoContentTwo = partTwo?.referencesCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 2 Content 2'
  );

  const richTextHeadingPartTwo = partTwoContentOne?.content?.json;
  const richTextSubHeadingPartTwo = partTwoContentTwo?.content?.json;

  const contentBtnPartTwo = partTwoContentOne?.ctasCollection?.items.find(
    (item) => item.internalTitle === 'Our People Part 2 Content 1 CTA'
  );

  const richTextHeadingPartTwoToHTML = clearDefaultParagraph(
    richTextHeadingPartTwo
  );

  const richTextSubHeadingPartTwoToHTML = clearDefaultParagraph(
    richTextSubHeadingPartTwo
  );

  const expertPartTwo = partTwo?.referencesCollection?.items.find(
    (item) => item.internalTitle === 'Expert'
  );

  const contentTextAlignPartOne = partTwoContentOne?.textAlign;
  const contentTextAlignPartTwo = partTwoContentTwo?.textAlign;

  return (
    <section className={our_people_wrapper}>
      <div className={our_people_part_one}>
        <div>
          <span>Our People</span>
          <h1
            dangerouslySetInnerHTML={richTextHeadingPartOneToHTML}
            className={contentAligmentOptions[richTextHeadingPartOneAlignment]}
          ></h1>
        </div>
        <ul className={our_people_part_one_list}>
          {cardListPartOne?.map((card, index) => {
            return (
              (
                <li key={card?.url + index}>
                  <h3>{card?.heading}</h3>
                  <p>{card?.subheading}</p>
                  <Link
                    href={card?.url}
                    target="_blank"
                    aria-label={card?.heading}
                    className={btn_wrapper}
                  >
                    <Icon type="arrow" name="forward" />
                  </Link>
                </li>
              ) || null
            );
          })}
        </ul>
      </div>
      <div className={our_people_part_two}>
        <div className={our_people_part_two_left}>
          <h1
            className={contentAligmentOptions[contentTextAlignPartOne]}
            dangerouslySetInnerHTML={richTextHeadingPartTwoToHTML}
          ></h1>
          <Button
            className={explore_btn}
            internalTitle={contentBtnPartTwo?.internalTitle}
            label={contentBtnPartTwo?.label}
            theme={contentBtnPartTwo?.theme}
            url={contentBtnPartTwo?.url || ''}
          />
        </div>
        <div className={our_people_part_two_right}>
          <div className={expert_img_wrapper}>
            <div className={expert_img}>
              <Image
                alt="expert_image"
                src={expertPartTwo?.image?.url || ''}
                quality={100}
                fill
              />
            </div>
          </div>
          <div
            className={classNames(expert_info, [
              contentAligmentOptions[contentTextAlignPartTwo],
            ])}
          >
            <p dangerouslySetInnerHTML={richTextSubHeadingPartTwoToHTML}></p>
            <div>
              <span>{`${expertPartTwo?.firstName} ${expertPartTwo?.lastName}`}</span>
              <span>{expertPartTwo?.jobTitle}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

OurPeople.propTypes = {
  referencesCollection: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        blocksCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              content: PropTypes.shape({
                json: PropTypes.object,
              }),
              textAlign: PropTypes.oneOf(['left', 'right', 'center']),
            })
          ),
        }),
        referencesCollection: PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              content: PropTypes.shape({
                json: PropTypes.object,
              }),
              textAlign: PropTypes.oneOf(['left', 'right', 'center']),
              ctasCollection: PropTypes.shape({
                items: PropTypes.arrayOf(
                  PropTypes.shape({
                    internalTitle: PropTypes.string,
                    label: PropTypes.string,
                    theme: PropTypes.string,
                    url: PropTypes.string,
                  })
                ),
              }),
              image: PropTypes.shape({
                url: PropTypes.string,
              }),
              firstName: PropTypes.string,
              lastName: PropTypes.string,
              jobTitle: PropTypes.string,
            })
          ),
        }),
      })
    ),
  }),
};

export default OurPeople;
