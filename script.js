$('.main-content__comment-like-answer').on('click',function() {
	$(this).parents('.main-content__comment-branch').after('<div class="main-content__comment-one main-content__comment-one_respond"><div class="main-content__comment-avatar"><img src="img/avatar.jpg"></div><div class="main-content__comment-block"><div class="main-content__comment-area"><textarea placeholder="Мой комментарий..."></textarea></div><div class="main-content__comment-button"><div class="button button_comment-cancel">Отмена</div><div class="button button_comment-send">Оставить комментарий</div></div></div> </div>')
})
$(document).on('click','.button_comment-cancel',function() {
	$(this).parents('.main-content__comment-one').remove();
	$(this).parents('.main-content__comments').find('.main-content__comment-area textarea').val('');
})